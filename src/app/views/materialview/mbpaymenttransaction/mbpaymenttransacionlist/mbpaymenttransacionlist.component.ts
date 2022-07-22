import { Component, OnInit } from '@angular/core';
import { MbpaymenttransacioncreateComponent } from './../mbpaymenttransacioncreate/mbpaymenttransacioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MbpaymenttransaciondetailComponent } from './../mbpaymenttransaciondetail/mbpaymenttransaciondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MBPaymentTransaction } from './../../../../entity/models/Material/mbpayment-transaction';
import { MBPaymentTransactionService } from './../../../../services/api-service/MaterialService/mbpayment-transaction.service';
@Component({
  selector: 'app-mbpaymenttransacionlist',
  templateUrl: './mbpaymenttransacionlist.component.html',
  styleUrls: ['./mbpaymenttransacionlist.component.css']
})
export class MbpaymenttransacionlistComponent implements OnInit {
  mbPaymentData : MBPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private mBPaymentTransactionService: MBPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'MB Payment Transacton List';

  onGetMaterialUsedList(): any{
    this.mBPaymentTransactionService.getMBPaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.mbPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Material Bought Payment list") 
    );
    console.log(this.mbPaymentData)
  }
  onGetSingleMaterialUsed(id:number): any{
    this.mBPaymentTransactionService.getMBPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Material Bought Payment by id ')
    );
  }
  onDeleteMaterialUsed(id:number): any {  
    var ans = confirm("Do you want to delete Material Bought Payment with Id: " + id);  
    if (ans) {  
        this.mBPaymentTransactionService.deleteMBPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting Material Bought Payment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MBPaymentTransaction>(MbpaymenttransacioncreateComponent, 
      new MBPaymentTransaction(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MBPaymentTransaction>(MbpaymenttransaciondetailComponent,
      this.mbPaymentData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MBPaymentTransaction>(MbpaymenttransacioncreateComponent,
      this.mbPaymentData.find(each => each.Id == id),
      "Employee Payment Edit");
  }
}
