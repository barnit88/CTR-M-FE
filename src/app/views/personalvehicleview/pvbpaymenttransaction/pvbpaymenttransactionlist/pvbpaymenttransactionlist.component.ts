import { Component, OnInit } from '@angular/core';
import { PvbpaymenttransactioncreateComponent } from './../pvbpaymenttransactioncreate/pvbpaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvbpaymenttransactiondetailComponent } from './../pvbpaymenttransactiondetail/pvbpaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVBPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvbpayment-transaction';
import { PVBPaymentTransactionService } from './../../../../services/api-service/PersonalVehicleService/pvbpayment-transaction.service';
@Component({
  selector: 'app-pvbpaymenttransactionlist',
  templateUrl: './pvbpaymenttransactionlist.component.html',
  styleUrls: ['./pvbpaymenttransactionlist.component.css']
})
export class PvbpaymenttransactionlistComponent implements OnInit {
  pvbPaymentData: PVBPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private pvbPaymentTransactionService:PVBPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle Bought Transaction List';

  onGetPVBPaymentList(): any{
    this.pvbPaymentTransactionService.getPVBoughtPaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.pvbPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PVBPayment list") 
    );
    console.log(this.pvbPaymentData)
  }
  onGetSinglePVBPayment(id:number): any{
    this.pvbPaymentTransactionService.getPVBPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  PVBPayment by id '));
    
  }
  getPVBPaymentTransactionById(id:number): any {  
    var ans = confirm("Do you want to delete  PVBPayment with Id: " + id);  
    if (ans) {  
        this.pvbPaymentTransactionService.deletePVBPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  PVBPayment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}


  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVBPaymentTransaction>(PvbpaymenttransactioncreateComponent, 
      new PVBPaymentTransaction(),
      'Create PVB Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBPaymentTransaction>(PvbpaymenttransactiondetailComponent,
      this.pvbPaymentData.find(each => each.Id == id),
      "PVB Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBPaymentTransaction>(PvbpaymenttransactioncreateComponent,
      this.pvbPaymentData.find(each => each.Id == id),
      "PVB Payment Edit");
  }
}
