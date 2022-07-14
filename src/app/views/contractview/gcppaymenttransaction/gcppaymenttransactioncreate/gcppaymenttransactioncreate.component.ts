import { Component, OnInit } from '@angular/core';
import { GCPaymentTransaction } from './../../../../entity/models/Contract/gcpayment-transaction';

@Component({
  selector: 'app-gcppaymenttransactioncreate',
  templateUrl: './gcppaymenttransactioncreate.component.html',
  styleUrls: ['./gcppaymenttransactioncreate.component.css']
})
export class GcppaymenttransactioncreateComponent implements OnInit {
  title:string=" Give Contract Payment"
  gcPayment: GCPaymentTransaction= new GCPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }

  gcPaymentSubmit(){
    
  }


}
