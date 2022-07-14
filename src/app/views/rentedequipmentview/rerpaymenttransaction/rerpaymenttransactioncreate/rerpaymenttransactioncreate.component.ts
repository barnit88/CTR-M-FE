import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';

@Component({
  selector: 'app-rerpaymenttransactioncreate',
  templateUrl: './rerpaymenttransactioncreate.component.html',
  styleUrls: ['./rerpaymenttransactioncreate.component.css']
})
export class RerpaymenttransactioncreateComponent implements OnInit {
rerPaymentTransaction: RERPaymentTransaction = new RERPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New RERP"
  rerPaymentTransactioSubmit(form:NgForm){}
}
