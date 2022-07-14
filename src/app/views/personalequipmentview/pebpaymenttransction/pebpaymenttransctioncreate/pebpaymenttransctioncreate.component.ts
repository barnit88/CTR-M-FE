import { Component, OnInit } from '@angular/core';
import { PEBPaymentTransaction } from './../../../../entity/models/PersonalEquipment/pebpayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pebpaymenttransctioncreate',
  templateUrl: './pebpaymenttransctioncreate.component.html',
  styleUrls: ['./pebpaymenttransctioncreate.component.css']
})
export class PebpaymenttransctioncreateComponent implements OnInit {
  pebPayment: PEBPaymentTransaction= new PEBPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New PEBP"

  pebPaymentSubmit(form:NgForm){
    console.log(form);
  }
}
