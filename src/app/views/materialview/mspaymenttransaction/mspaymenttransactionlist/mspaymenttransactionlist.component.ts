import { Component, OnInit } from '@angular/core';
import { MspaymenttransactioncreateComponent } from './../mspaymenttransactioncreate/mspaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MspaymenttransactiondetailComponent } from './../mspaymenttransactiondetail/mspaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MSPaymentTransaction } from './../../../../entity/models/Material/mspayment-transaction';
import { MSPaymentTransactionService } from './../../../../services/api-service/MaterialService/mspayment-transaction.service';
@Component({
  selector: 'app-mspaymenttransactionlist',
  templateUrl: './mspaymenttransactionlist.component.html',
  styleUrls: ['./mspaymenttransactionlist.component.css']
})
export class MspaymenttransactionlistComponent implements OnInit {
  msPaymentData: MSPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private mSPaymentTransactionService: MSPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'MS Payment Transaction List';

  onGetMSPaymentList(): any{
    this.mSPaymentTransactionService.getMSpaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.msPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching MSPayment list") 
    );
    console.log(this.msPaymentData)
  }
  onGetSingleMSPayment(id:number): any{
    this.mSPaymentTransactionService.getMSPaymentTransactionServiceById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single MSPayment by id ')
    );
  }
  onDeleteMSPayment(id:number): any {  
    var ans = confirm("Do you want to delete MSPayment with Id: " + id);  
    if (ans) {  
        this.mSPaymentTransactionService.deleteMSPaymentTransactionServiceById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting MaSPayment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MSPaymentTransaction>(MspaymenttransactioncreateComponent, 
      new MSPaymentTransaction(),
      'Create MS Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MSPaymentTransaction>(MspaymenttransactiondetailComponent,
      this.msPaymentData.find(each => each.Id == id),
      "MS Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MSPaymentTransaction>(MspaymenttransactioncreateComponent,
      this.msPaymentData.find(each => each.Id == id),
      "MS Payment Edit");
  }
}
