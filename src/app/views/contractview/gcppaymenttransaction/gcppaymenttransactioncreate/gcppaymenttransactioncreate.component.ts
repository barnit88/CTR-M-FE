import { Component, OnInit } from '@angular/core';
import { GCPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';
import { GCPaymentTransaction } from './../../../../entity/models/Contract/gcpayment-transaction';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GiveContractPaymentTransactionService } from './../../../../services/api-service/ContractService/gc-payment.service';

@Component({
  selector: 'app-gcppaymenttransactioncreate',
  templateUrl: './gcppaymenttransactioncreate.component.html',
  styleUrls: ['./gcppaymenttransactioncreate.component.css']
})
export class GcppaymenttransactioncreateComponent implements OnInit {
  title:GCPaymentTransactionTitle.Create;
  data:GCPaymentTransaction;
  constructor(private modelRef: BsModalRef,
    private gcPaymentTransactionService: GiveContractPaymentTransactionService) { }

  ngOnInit(): void {
  }

  
  public gcPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddGCPayment();
    } else {
      this.UpdateGCPayment();
    }
    this.modelRef.hide();
  }
  private AddGCPayment(): void {
    this.gcPaymentTransactionService.addGCPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error));
  }
  private UpdateGCPayment(): void {
    this.gcPaymentTransactionService.updateGCPaymentTransaction(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
  


}
