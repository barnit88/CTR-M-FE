import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourPayment } from './../../../../entity/models/Labour/labour-payment';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LabourPaymentService } from './../../../../services/api-service/LabourService/labour-payment.service';
import { LabourPaymentTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-labourpaymentcreate',
  templateUrl: './labourpaymentcreate.component.html',
  styleUrls: ['./labourpaymentcreate.component.css']
})
export class LabourpaymentcreateComponent implements OnInit {
  data:LabourPayment;
  title:LabourPaymentTitle.Create;

  constructor(private genericModalPopUpService:GenericModalPopUpService,
    private modelref: BsModalRef,
    private labourPaymentService: LabourPaymentService) { }

  ngOnInit(): void {
  }

  public labourPaymentSubmit(): void{
    if ( this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
      this.AddLabourPayment();
    } else {
      this.UpdateLabourPayment();
    }
    this.modelref.hide();
  }

  private AddLabourPayment(): void{
    this.labourPaymentService.addLabourPayment(this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    );
  }

  private UpdateLabourPayment(): void {
    this.labourPaymentService.labourPaymentUpdate(this.data.Id, this.data).subscribe(
      (response: any)=> console.log('done with adding'+ response),
      (error)=> console.log(error),
    )
  }


}
