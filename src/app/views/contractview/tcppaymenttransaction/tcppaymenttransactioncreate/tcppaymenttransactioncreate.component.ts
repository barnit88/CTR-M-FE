import { Component, OnInit } from '@angular/core';
import { GenericDetailPopUpService } from './../../../../services/common-service/generic.detail.popup.service';
import { TCPaymentTransaction } from './../../../../entity/models/Contract/tcpayment-transaction';
import { NgForm } from '@angular/forms';
import { TCPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TakeContractpaymentTransactionService } from './../../../../services/api-service/ContractService/tc-payment.service';

@Component({
  selector: 'app-tcppaymenttransactioncreate',
  templateUrl: './tcppaymenttransactioncreate.component.html',
  styleUrls: ['./tcppaymenttransactioncreate.component.css']
})
export class TcppaymenttransactioncreateComponent implements OnInit {
  title:TCPaymentTransactionTitle.Create;
  data:TCPaymentTransaction;

  constructor(private modelRef: BsModalRef,
    private takeContractpaymentTransactionService: TakeContractpaymentTransactionService,
    ) { }

  ngOnInit(): void {
  }

  
  public tcPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddTCPayment();
    } else {
      this.UpdateTCPayment();
    }
    this.modelRef.hide();
  }
  private AddTCPayment(): void {
    this.takeContractpaymentTransactionService.addTCPayment(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error));
  }
  private UpdateTCPayment(): void {
    this.takeContractpaymentTransactionService.updateTCPayment(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
