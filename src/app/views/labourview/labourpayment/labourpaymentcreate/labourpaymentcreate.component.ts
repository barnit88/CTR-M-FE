import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourPayment } from './../../../../entity/models/Labour/labour-payment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-labourpaymentcreate',
  templateUrl: './labourpaymentcreate.component.html',
  styleUrls: ['./labourpaymentcreate.component.css']
})
export class LabourpaymentcreateComponent implements OnInit {
  labourPayment: LabourPayment= new LabourPayment();

  constructor(private genericModalPopUpService:GenericModalPopUpService) { }

  ngOnInit(): void {
  }
  title:string="Create New LSP"

  labourPaymentSubmit(form:NgForm){
    console.log(form);
  }

}
