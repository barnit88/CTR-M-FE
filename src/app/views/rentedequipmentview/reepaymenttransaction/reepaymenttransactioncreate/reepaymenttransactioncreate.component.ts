import { Component, OnInit } from '@angular/core';
import { REEPaymentTransaction } from './../../../../entity/models/RentedEquipment/reepayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reepaymenttransactioncreate',
  templateUrl: './reepaymenttransactioncreate.component.html',
  styleUrls: ['./reepaymenttransactioncreate.component.css']
})
export class ReepaymenttransactioncreateComponent implements OnInit {
  reePayment: REEPaymentTransaction= new REEPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New REEP";
  reePaymentSubmit(form:NgForm){
    console.log(form);
    
  }
}
