import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RERPaymentTransactionService } from './../../../../services/api-service/RentedEquipmentService/rerpayment-transaction.service';
import { RERPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-rerpaymenttransactioncreate',
  templateUrl: './rerpaymenttransactioncreate.component.html',
  styleUrls: ['./rerpaymenttransactioncreate.component.css']
})
export class RerpaymenttransactioncreateComponent implements OnInit {
data:RERPaymentTransaction;
title:RERPaymentTransactionTitle.Create;
  constructor(
    private modelRef: BsModalRef,
    private rerPaymentTransactionService: RERPaymentTransactionService,
  ) { }

  ngOnInit(): void {
  }
  public rerPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRERPayemnt();
    } else {
      this.UpdateRERPayment();
    }
    this.modelRef.hide();
  }
  private AddRERPayemnt(): void{
    this.rerPaymentTransactionService.addRERPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  private UpdateRERPayment(): void {
    this.rerPaymentTransactionService.rerPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
