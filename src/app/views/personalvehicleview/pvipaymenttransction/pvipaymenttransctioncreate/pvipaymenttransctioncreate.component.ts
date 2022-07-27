import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVIPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvipayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PVIPaymentTransactionService } from 'src/app/services/api-service/PersonalVehicleService/pvipayment-transaction.service';
import { PVIPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-pvipaymenttransctioncreate',
  templateUrl: './pvipaymenttransctioncreate.component.html',
  styleUrls: ['./pvipaymenttransctioncreate.component.css']
})
export class PvipaymenttransctioncreateComponent implements OnInit {
  data:PVIPaymentTransaction;
  title:PVIPaymentTransactionTitle.Create;

  constructor(private modelRef: BsModalRef,
    private pviPaymenttransactionService: PVIPaymentTransactionService) {}

  ngOnInit(): void {
  }
  
  public pviPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPVIPayment();
    } else {
      this.UpdatePVIPayment();
    }
    this.modelRef.hide(); 
  }

  private AddPVIPayment(): void{
  this.pviPaymenttransactionService.addPVIPaymentTransaction(this.data).subscribe(
    (response)=> console.log('done with adding '+ response),
    (error)=> console.log(error));
  }
  
  private UpdatePVIPayment(): void {
  this.pviPaymenttransactionService.pviUpdatePayment(this.data.Id, this.data).subscribe(
    (response)=> console.log('done with update'+ response),
    (error)=> console.log(error));
  }
}