import { Component, OnInit } from '@angular/core';
import { RentedvehiclecreateComponent } from './../rentedvehiclecreate/rentedvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from 'src/app/views/clientview/clientdetail/clientdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RentedVehicle } from 'src/app/entity/models/RentedVehicle/rented-vehicle';
import { RentedVehicleService } from './../../../../services/api-service/RentedVehicleService/rented-vehicle.service';
@Component({
  selector: 'app-rentedvehiclelist',
  templateUrl: './rentedvehiclelist.component.html',
  styleUrls: ['./rentedvehiclelist.component.css']
})
export class RentedvehiclelistComponent implements OnInit {
  rvData: RentedVehicle[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private rentedVehicleService:RentedVehicleService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle List';

  onGetRVList(): any{
    this.rentedVehicleService.getRVList().subscribe(
      (response)=> response.map(response=>{
        return this.rvData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RV  list") 
    );
    console.log(this.rvData)
  }
  onGetSingleRV(id:number): any{
    this.rentedVehicleService.getRentedVehicleById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RV  by id '));
    
  }
  getRVById(id:number): any {  
    var ans = confirm("Do you want to delete  RV  with Id: " + id);  
    if (ans) {  
        this.rentedVehicleService.deleteRentedVehicleById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RV ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RentedVehicle>(RentedvehiclecreateComponent, 
      new RentedVehicle(),
      'Create Rented Vehicle List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedVehicle>(RentedvehiclecreateComponent,
      this.rvData.find(each => each.Id == id),
      "Rented Vehicle Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedVehicle>(RentedvehiclecreateComponent,
      this.rvData.find(each => each.Id == id),
      "Rented Vehicle Edit");
  }
}
