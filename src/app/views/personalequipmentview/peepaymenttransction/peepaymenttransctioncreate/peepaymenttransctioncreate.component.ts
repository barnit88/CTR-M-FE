import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PEEPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peepayment-transaction';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-peepaymenttransctioncreate',
  templateUrl: './peepaymenttransctioncreate.component.html',
  styleUrls: ['./peepaymenttransctioncreate.component.css']
})
export class PeepaymenttransctioncreateComponent implements OnInit {
  title:string="Create New PEEP"
  peePayment: PEEPaymentTransaction=new PEEPaymentTransaction();
  constructor(private GenericModalPopUpService: GenericModalPopUpService) { }

  ngOnInit(): void {
  }

  peePaymentSubmit(form:NgForm){
    console.log(form);
  }

}
