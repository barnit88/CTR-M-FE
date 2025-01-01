import { Component, OnInit } from '@angular/core';
import { MSPaymentTransaction } from './../../../../entity/models/Material/mspayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MSPaymentTransactionService } from './../../../../services/api-service/MaterialService/mspayment-transaction.service';
import { MSPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-mspaymenttransactioncreate',
  templateUrl: './mspaymenttransactioncreate.component.html',
  styleUrls: ['./mspaymenttransactioncreate.component.css']
})
export class MspaymenttransactioncreateComponent implements OnInit {
  data: MSPaymentTransaction;
  title:MSPaymentTransactionTitle.Create;

  constructor(private modelRef:BsModalRef,
    private msPaymentTransactionService: MSPaymentTransactionService) { }

  ngOnInit(): void {
  }
  public msPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddMSPayment();
    } else {
      this.UpdateMSPayment();
    }
    this.modelRef.hide();
  }
  private AddMSPayment(): void{
    this.msPaymentTransactionService.addMSPaymentTransactionService(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdateMSPayment(): void{
    this.msPaymentTransactionService.msPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
}
