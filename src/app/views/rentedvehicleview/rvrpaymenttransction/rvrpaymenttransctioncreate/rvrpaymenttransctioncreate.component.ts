import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVRPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvrpayment-transaction';

@Component({
  selector: 'app-rvrpaymenttransctioncreate',
  templateUrl: './rvrpaymenttransctioncreate.component.html',
  styleUrls: ['./rvrpaymenttransctioncreate.component.css']
})
export class RvrpaymenttransctioncreateComponent implements OnInit {
  rvrPaymentTransaction : RVRPaymentTransaction =new RVRPaymentTransaction();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New RVR"
  rvrPaymentTransactionSubmit(form:NgForm) {}
}
