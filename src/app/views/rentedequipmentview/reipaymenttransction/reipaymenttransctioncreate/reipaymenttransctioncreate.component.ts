import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { REIPaymentTransaction } from 'src/app/entity/models/RentedEquipment/reipayment-transaction';

@Component({
  selector: 'app-reipaymenttransctioncreate',
  templateUrl: './reipaymenttransctioncreate.component.html',
  styleUrls: ['./reipaymenttransctioncreate.component.css']
})
export class ReipaymenttransctioncreateComponent implements OnInit {
  reiPaymentTransaction : REIPaymentTransaction = new REIPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New REIP"
  reiPaymentTransactionSubmit(form:NgForm){}
}
