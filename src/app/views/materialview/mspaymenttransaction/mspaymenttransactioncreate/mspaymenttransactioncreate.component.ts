import { Component, OnInit } from '@angular/core';
import { MSPaymentTransaction } from './../../../../entity/models/Material/mspayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mspaymenttransactioncreate',
  templateUrl: './mspaymenttransactioncreate.component.html',
  styleUrls: ['./mspaymenttransactioncreate.component.css']
})
export class MspaymenttransactioncreateComponent implements OnInit {
  msPayment: MSPaymentTransaction=new MSPaymentTransaction();

  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New MSP"
  msPaymentSubmit(form:NgForm){
    console.log(form);
    
  }

}
