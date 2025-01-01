import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PEEPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peepayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PEEPaymentTransactionService } from './../../../../services/api-service/PersonalEquipmentService/peepayment-transaction.service';
import { PEEPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-peepaymenttransctioncreate',
  templateUrl: './peepaymenttransctioncreate.component.html',
  styleUrls: ['./peepaymenttransctioncreate.component.css']
})
export class PeepaymenttransctioncreateComponent implements OnInit {
  title:PEEPaymentTransactionTitle.Create;
  data: PEEPaymentTransaction;
  
  constructor(private GenericModalPopUpService: GenericModalPopUpService,
    private modelRef: BsModalRef,
    private peePaymentTransactionService: PEEPaymentTransactionService) { }

  ngOnInit(): void {
  }
  public peePaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPEEPayment();
    } else {
      this.UpdatePEEPayment();
    }
    this.modelRef.hide();
  }
  private AddPEEPayment(): void{
    this.peePaymentTransactionService.addPEEPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePEEPayment(): void{
    this.peePaymentTransactionService.peePaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
