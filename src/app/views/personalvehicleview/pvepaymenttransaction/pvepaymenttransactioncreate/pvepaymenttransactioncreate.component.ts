import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PVEPaymentTransaction } from 'src/app/entity/models/PersonalVehicle/pvepayment-transaction';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PVBPaymentTransactionService } from './../../../../services/api-service/PersonalVehicleService/pvbpayment-transaction.service';
import { PVEPaymentTransactionService } from './../../../../services/api-service/PersonalVehicleService/pvepayment-transaction.service';
import { PVEPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-pvepaymenttransactioncreate',
  templateUrl: './pvepaymenttransactioncreate.component.html',
  styleUrls: ['./pvepaymenttransactioncreate.component.css']
})
export class PvepaymenttransactioncreateComponent implements OnInit {
  data: PVEPaymentTransaction;
  title:PVEPaymentTransactionTitle.Create;

  constructor(private modelRef: BsModalRef,
    private pvePaymentTransactionService: PVEPaymentTransactionService) { }

  ngOnInit(): void {
  }

  public pvePaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPVE();
    } else {
      this.UpdatePEBought();
    }
    this.modelRef.hide();
  }

  private AddPVE(): void{
    this.pvePaymentTransactionService.addPVEPayment(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  
  private UpdatePEBought(): void{
    this.pvePaymentTransactionService.pveUpdatePayment(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
  
}
