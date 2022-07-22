import { Component, OnInit } from '@angular/core';
import { RerpaymenttransactioncreateComponent } from './../rerpaymenttransactioncreate/rerpaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RerpaymenttransactiondetailComponent } from './../rerpaymenttransactiondetail/rerpaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';
import { RERPaymentTransactionService } from './../../../../services/api-service/RentedEquipmentService/rerpayment-transaction.service';
@Component({
  selector: 'app-rerpaymenttransactionlist',
  templateUrl: './rerpaymenttransactionlist.component.html',
  styleUrls: ['./rerpaymenttransactionlist.component.css']
})
export class RerpaymenttransactionlistComponent implements OnInit {
  rerPaymentData: RERPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private rerPaymentTransactionService:RERPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Rent Payment Transaction List';

  
  onGetRERPaymentList(): any{
    this.rerPaymentTransactionService.getRERentPaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.rerPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RER Payment list") 
    );
    console.log(this.rerPaymentData)
  }
  onGetSingleRERPayment(id:number): any{
    this.rerPaymentTransactionService.getRERPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RER Payment by id '));
    
  }
  getRERPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  RER Payment with Id: " + id);  
    if (ans) {  
        this.rerPaymentTransactionService.deleteRERPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RER Payment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RERPaymentTransaction>(RerpaymenttransactioncreateComponent, 
      new RERPaymentTransaction(),
      'Create RER Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RERPaymentTransaction>(RerpaymenttransactiondetailComponent,
      this.rerPaymentData.find(each => each.Id == id),
      "RER Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RERPaymentTransaction>(RerpaymenttransactioncreateComponent,
      this.rerPaymentData.find(each => each.Id == id),
      "RER Payment Edit");
  }


}
