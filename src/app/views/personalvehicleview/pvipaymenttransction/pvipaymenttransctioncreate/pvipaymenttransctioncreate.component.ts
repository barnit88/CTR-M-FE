import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVIPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvipayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pvipaymenttransctioncreate',
  templateUrl: './pvipaymenttransctioncreate.component.html',
  styleUrls: ['./pvipaymenttransctioncreate.component.css']
})
export class PvipaymenttransctioncreateComponent implements OnInit {
  pviPayment:PVIPaymentTransaction = new PVIPaymentTransaction();
  constructor() {}

  ngOnInit(): void {
  }
  title:string="Craete New PVIP"
  pviPaymentSubmit(form:NgForm){
    console.log(form);
  }
}