import { Component, OnInit } from '@angular/core';
import { GenericDetailPopUpService } from './../../../../services/common-service/generic.detail.popup.service';
import { TCPaymentTransaction } from './../../../../entity/models/Contract/tcpayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tcppaymenttransactioncreate',
  templateUrl: './tcppaymenttransactioncreate.component.html',
  styleUrls: ['./tcppaymenttransactioncreate.component.css']
})
export class TcppaymenttransactioncreateComponent implements OnInit {
  title: any = 'Take Contract Payment Transaction Create';
  takeContractPayment: TCPaymentTransaction= new TCPaymentTransaction();
  data: any;
  constructor() { }

  ngOnInit(): void {
  }

  takeContractPaymentSubmit(form:NgForm){
   console.log(form); 
  }

}
