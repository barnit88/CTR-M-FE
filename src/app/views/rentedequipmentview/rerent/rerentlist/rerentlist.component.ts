import { Component, OnInit } from '@angular/core';
import { RerentcreateComponent } from './../rerentcreate/rerentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RerentdetailComponent } from './../rerentdetail/rerentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RERent } from 'src/app/entity/models/RentedEquipment/rerent';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';
import { RerpaymenttransactioncreateComponent } from './../../rerpaymenttransaction/rerpaymenttransactioncreate/rerpaymenttransactioncreate.component';
import { RerpaymenttransactiondetailComponent } from './../../rerpaymenttransaction/rerpaymenttransactiondetail/rerpaymenttransactiondetail.component';
import { RERentService } from './../../../../services/api-service/RentedEquipmentService/rerent.service';
@Component({
  selector: 'app-rerentlist',
  templateUrl: './rerentlist.component.html',
  styleUrls: ['./rerentlist.component.css']
})
export class RerentlistComponent implements OnInit {
  rerData: RERent[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private reRentService:RERentService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Rent List';

  onGetRERList(): any{
    this.reRentService.getRERentList().subscribe(
      (response)=> response.map(response=>{
        return this.rerData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RER  list") 
    );
    console.log(this.rerData)
  }
  onGetSingleRER(id:number): any{
    this.reRentService.getRERentById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RER  by id '));
    
  }
  getRERById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.reRentService.deleteRERentById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RER ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RERent>(RerentcreateComponent, 
      new RERent(),
      'Create RER  List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RERent>(RerentdetailComponent,
      this.rerData.find(each => each.Id == id),
      "RER  Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RERent>(RerentcreateComponent,
      this.rerData.find(each => each.Id == id),
      "RER  Edit");
  }

}
