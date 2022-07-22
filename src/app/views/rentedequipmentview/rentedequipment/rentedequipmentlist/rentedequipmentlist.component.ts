import { Component, OnInit } from '@angular/core';
import { RentedequipmentcreateComponent } from './../rentedequipmentcreate/rentedequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RentedequipmentdetailComponent } from './../rentedequipmentdetail/rentedequipmentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RentedEquipment } from 'src/app/entity/models/RentedEquipment/rented-equipment';
import { RentedEquipmentService } from './../../../../services/api-service/RentedEquipmentService/rented-equipment.service';
@Component({
  selector: 'app-rentedequipmentlist',
  templateUrl: './rentedequipmentlist.component.html',
  styleUrls: ['./rentedequipmentlist.component.css']
})
export class RentedequipmentlistComponent implements OnInit {
  reData: RentedEquipment[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private rentedEquipmentService:RentedEquipmentService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment List';

  onGetREList(): any{
    this.rentedEquipmentService.getREList().subscribe(
      (response)=> response.map(response=>{
        return this.reData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RE  list") 
    );
    console.log(this.reData)
  }
  onGetSingleRE(id:number): any{
    this.rentedEquipmentService.getRentedEquipmentById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RE  by id '));
    
  }
  getREById(id:number): any {  
    var ans = confirm("Do you want to delete  RE  with Id: " + id);  
    if (ans) {  
        this.rentedEquipmentService.deleteRentedEquipmentById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RE ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RentedEquipment>(RentedequipmentcreateComponent, 
      new RentedEquipment(),
      'Create Rented Equipment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedEquipment>(RentedequipmentdetailComponent,
      this.reData.find(each => each.Id == id),
      "Rented Equipment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedEquipment>(RentedequipmentcreateComponent,
      this.reData.find(each => each.Id == id),
      "Rented Equipment Edit");
  }
}
