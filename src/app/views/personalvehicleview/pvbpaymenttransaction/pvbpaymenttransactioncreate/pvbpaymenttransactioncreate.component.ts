import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVBPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvbpayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pvbpaymenttransactioncreate',
  templateUrl: './pvbpaymenttransactioncreate.component.html',
  styleUrls: ['./pvbpaymenttransactioncreate.component.css']
})
export class PvbpaymenttransactioncreateComponent implements OnInit {
  pvbPayment: PVBPaymentTransaction= new PVBPaymentTransaction();
  title:string="Craete New PVBP"
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {
  }
  pvbPaymentSubmit(form:NgForm){
    console.log(form);
  }
  

}
