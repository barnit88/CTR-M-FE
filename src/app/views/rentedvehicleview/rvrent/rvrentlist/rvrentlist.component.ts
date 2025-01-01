import { Component, OnInit } from '@angular/core';
import { RvrentcreateComponent } from './../rvrentcreate/rvrentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvrentdetailComponent } from './../rvrentdetail/rvrentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVRent } from './../../../../entity/models/RentedVehicle/rvrent';
import { RVRentService } from './../../../../services/api-service/RentedVehicleService/rvrent.service';
@Component({
  selector: 'app-rvrentlist',
  templateUrl: './rvrentlist.component.html',
  styleUrls: ['./rvrentlist.component.css']
})
export class RvrentlistComponent implements OnInit {
  rvrData: RVRent[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private rvRentService:RVRentService) {}

  ngOnInit(): void {}
  title: string = 'Rent Vehicle Rent List';

  onGetRVRList(): any{
    this.rvRentService.getRVRentList().subscribe(
      (response)=> response.map(response=>{
        return this.rvrData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RVR  list") 
    );
    console.log(this.rvrData)
  }
  onGetSingleRVR(id:number): any{
    this.rvRentService.getRVRentById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVR  by id '));
    
  }
  getRVRById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.rvRentService.deleteRVRentById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVR ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVRent>(RvrentcreateComponent, 
      new RVRent(),
      'Create RV Rent List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRent>(RvrentdetailComponent,
      this.rvrData.find(each => each.Id == id),
      "RV Rent Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRent>(RvrentcreateComponent,
      this.rvrData.find(each => each.Id == id),
      "RV Rent Edit");
  }
}
