import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVEPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvepayment-transaction';
@Component({
  selector: 'app-rvepaymenttransctioncreate',
  templateUrl: './rvepaymenttransctioncreate.component.html',
  styleUrls: ['./rvepaymenttransctioncreate.component.css']
})
export class RvepaymenttransctioncreateComponent implements OnInit {
  rvePaymentTransaction : RVEPaymentTransaction = new RVEPaymentTransaction
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New RVEP"
  rvePaymentTransactionSubmit(form:NgForm){}
}
