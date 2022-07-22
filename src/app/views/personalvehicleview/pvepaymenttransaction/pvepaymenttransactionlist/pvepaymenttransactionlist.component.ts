import { Component, OnInit } from '@angular/core';
import { PvepaymenttransactioncreateComponent } from './../pvepaymenttransactioncreate/pvepaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvepaymenttransactiondetailComponent } from './../pvepaymenttransactiondetail/pvepaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVEPaymentTransaction } from 'src/app/entity/models/PersonalVehicle/pvepayment-transaction';
import { PVEPaymentTransactionService } from './../../../../services/api-service/PersonalVehicleService/pvepayment-transaction.service';
@Component({
  selector: 'app-pvepaymenttransactionlist',
  templateUrl: './pvepaymenttransactionlist.component.html',
  styleUrls: ['./pvepaymenttransactionlist.component.css']
})
export class PvepaymenttransactionlistComponent implements OnInit {
  pvePaymentData: PVEPaymentTransaction[]=[];

  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private pvePaymentTransactionService:PVEPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle Equipment Payment  Transaction';

   private onGetPVEPaymentList(): any{
    this.pvePaymentTransactionService.getPVExpensePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.pvePaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PVEPayment list") 
    );
    console.log(this.pvePaymentData)
  }
 private onGetSinglePVEPayment(id:number): any{
    this.pvePaymentTransactionService.getPVEPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  PVEPayment by id '));
    
  }
  getPVEPaymentTransactionById(id:number): any {  
    var ans = confirm("Do you want to delete  PVEPayment with Id: " + id);  
    if (ans) {  
        this.pvePaymentTransactionService.deletePVEPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  PVEPayment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVEPaymentTransaction>(PvepaymenttransactioncreateComponent, 
      new PVEPaymentTransaction(),
      'Create PVE Payment List',
    );
  }

  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVEPaymentTransaction>(PvepaymenttransactiondetailComponent,
      this.pvePaymentData.find(each => each.Id == id),
      "PVE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVEPaymentTransaction>(PvepaymenttransactioncreateComponent,
      this.pvePaymentData.find(each => each.Id == id),
      "PVE Payment Edit");
  }
}
