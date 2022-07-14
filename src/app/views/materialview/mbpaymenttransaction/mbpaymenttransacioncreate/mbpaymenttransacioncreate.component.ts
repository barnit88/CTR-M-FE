import { Component, OnInit } from '@angular/core';
import { MBPaymentTransaction } from './../../../../entity/models/Material/mbpayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mbpaymenttransacioncreate',
  templateUrl: './mbpaymenttransacioncreate.component.html',
  styleUrls: ['./mbpaymenttransacioncreate.component.css']
})
export class MbpaymenttransacioncreateComponent implements OnInit {
  mbPayment: MBPaymentTransaction=new MBPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New MBP"

  mbPaymentSubmit(form:NgForm){
    console.log(form);
    
  }

}
