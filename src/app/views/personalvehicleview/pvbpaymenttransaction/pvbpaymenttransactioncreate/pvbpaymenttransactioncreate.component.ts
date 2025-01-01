import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVBPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvbpayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PVBPaymentTransactionService } from 'src/app/services/api-service/PersonalVehicleService/pvbpayment-transaction.service';
import { PVBPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-pvbpaymenttransactioncreate',
  templateUrl: './pvbpaymenttransactioncreate.component.html',
  styleUrls: ['./pvbpaymenttransactioncreate.component.css']
})
export class PvbpaymenttransactioncreateComponent implements OnInit {
  data:PVBPaymentTransaction;
  title:PVBPaymentTransactionTitle.Create;

  constructor(private genericModalPopUpService: GenericModalPopUpService,
    private modelRef: BsModalRef,
    private pvbPaymentTransactionService: PVBPaymentTransactionService) {}
 
    ngOnInit(): void {
  }

  public pvbPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPVBPayment();
    } else {
      this.UpdatePVBPaymentt();
    }
    this.modelRef.hide();
  }
  private AddPVBPayment(): void{
    this.pvbPaymentTransactionService.addPVBPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePVBPaymentt(): void{
    this.pvbPaymentTransactionService.pvbPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
  

}
