import { Component, OnInit } from '@angular/core';
import { PEIPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peipayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-peipaymenttransactioncreate',
  templateUrl: './peipaymenttransactioncreate.component.html',
  styleUrls: ['./peipaymenttransactioncreate.component.css']
})
export class PeipaymenttransactioncreateComponent implements OnInit {
  peiPayment:PEIPaymentTransaction=new PEIPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New PEIP"
  peiPaymentSubmit(form:NgForm){
    console.log(form);
  }

}
