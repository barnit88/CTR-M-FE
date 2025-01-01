import { Component, OnInit } from '@angular/core';
import { PEIPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peipayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PEIPaymentTransctionService } from './../../../../services/api-service/PersonalEquipmentService/peipayment-transction.service';
import { PEIPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-peipaymenttransactioncreate',
  templateUrl: './peipaymenttransactioncreate.component.html',
  styleUrls: ['./peipaymenttransactioncreate.component.css']
})
export class PeipaymenttransactioncreateComponent implements OnInit {
  data:PEIPaymentTransaction;
  title:PEIPaymentTransactionTitle.Create;
  
  constructor(private modelRef: BsModalRef,
    private peiPaymentTransctionService: PEIPaymentTransctionService) { }

  ngOnInit(): void {
  }

  public peiPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPEIPayment();
    } else {
      this.UpdatePEIPayment();
    }
    this.modelRef.hide();
  }
  private AddPEIPayment(): void{
    this.peiPaymentTransctionService.addPEIPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePEIPayment(): void{
    this.peiPaymentTransctionService.peiPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
