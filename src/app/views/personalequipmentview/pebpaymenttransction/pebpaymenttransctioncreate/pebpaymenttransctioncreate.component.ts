import { Component, OnInit } from '@angular/core';
import { PEBPaymentTransaction } from './../../../../entity/models/PersonalEquipment/pebpayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PEBPaymentTransactionService } from './../../../../services/api-service/PersonalEquipmentService/pebpayment-transaction.service';
import { PEBPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-pebpaymenttransctioncreate',
  templateUrl: './pebpaymenttransctioncreate.component.html',
  styleUrls: ['./pebpaymenttransctioncreate.component.css']
})
export class PebpaymenttransctioncreateComponent implements OnInit {
  data:PEBPaymentTransaction;
  title:PEBPaymentTransactionTitle.Create;
  
  constructor(private modelRef: BsModalRef,
    private pebPaymentTransactionService: PEBPaymentTransactionService) { }

  ngOnInit(): void {
  }

  public pebPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPEBPayment();
    } else {
      this.UpdatePEBPayment();
    }
    this.modelRef.hide();
  }
  private AddPEBPayment(): void{
    this.pebPaymentTransactionService.addPEBPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePEBPayment(): void{
    this.pebPaymentTransactionService.pebPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
}
