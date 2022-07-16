import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PVEPaymentTransaction } from 'src/app/entity/models/PersonalVehicle/pvepayment-transaction';

@Component({
  selector: 'app-pvepaymenttransactioncreate',
  templateUrl: './pvepaymenttransactioncreate.component.html',
  styleUrls: ['./pvepaymenttransactioncreate.component.css']
})
export class PvepaymenttransactioncreateComponent implements OnInit {
  title:string="Craete New PVEP";
  constructor() { }
  pvePaymentTransaction : PVEPaymentTransaction = new PVEPaymentTransaction();
  ngOnInit(): void {
  }
  pvePaymentTransactionSubmit(form:NgForm){}
  
}
