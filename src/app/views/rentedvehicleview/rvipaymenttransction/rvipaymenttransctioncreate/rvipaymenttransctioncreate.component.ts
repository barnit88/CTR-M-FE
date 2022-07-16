import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVIPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvipayment-transaction';
@Component({
  selector: 'app-rvipaymenttransctioncreate',
  templateUrl: './rvipaymenttransctioncreate.component.html',
  styleUrls: ['./rvipaymenttransctioncreate.component.css']
})
export class RvipaymenttransctioncreateComponent implements OnInit {
  rviPaymentTransaction : RVIPaymentTransaction = new RVIPaymentTransaction ();
  constructor() { }

  ngOnInit(): void {
  }
title:string="Craete New RVIP"
rviPaymentTransactionSubmit(form:NgForm){}
}
