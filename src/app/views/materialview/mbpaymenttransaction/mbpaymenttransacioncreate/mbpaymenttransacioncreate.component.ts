import { Component, OnInit } from '@angular/core';
import { MBPaymentTransaction } from './../../../../entity/models/Material/mbpayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MBPaymentTransactionService } from './../../../../services/api-service/MaterialService/mbpayment-transaction.service';
import { MBPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-mbpaymenttransacioncreate',
  templateUrl: './mbpaymenttransacioncreate.component.html',
  styleUrls: ['./mbpaymenttransacioncreate.component.css']
})
export class MbpaymenttransacioncreateComponent implements OnInit {
  data:MBPaymentTransaction;
  title:MBPaymentTransactionTitle.Create;

  constructor(private modelRef: BsModalRef,
    private mbPaymentTransactionService: MBPaymentTransactionService) { }

  ngOnInit(): void {
  }

  public mbPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddMBPayment();
    } else {
      this.UpdateMBPayment();
    }
    this.modelRef.hide();
  }

  private AddMBPayment(): void{
    this.mbPaymentTransactionService.addMBPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error));
  }
  private UpdateMBPayment(): void{
    this.mbPaymentTransactionService.mbPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    );
  }

}
