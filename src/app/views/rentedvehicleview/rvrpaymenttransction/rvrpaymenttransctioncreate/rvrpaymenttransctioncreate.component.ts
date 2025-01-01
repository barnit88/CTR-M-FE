import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVRPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';
import { RVRPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvrpayment-transaction';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RVRPaymentTransactionService } from './../../../../services/api-service/RentedVehicleService/rvrpayment-transaction.service';

@Component({
  selector: 'app-rvrpaymenttransctioncreate',
  templateUrl: './rvrpaymenttransctioncreate.component.html',
  styleUrls: ['./rvrpaymenttransctioncreate.component.css']
})
export class RvrpaymenttransctioncreateComponent implements OnInit {
  data:RVRPaymentTransaction;
  title:RVRPaymentTransactionTitle.Create;
  
  constructor(private modelRef: BsModalRef,
    private rvrPaymentTransactionService: RVRPaymentTransactionService) { }

  ngOnInit(): void {
  }
  public rvrPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRVRPayemnt();
    } else {
      this.UpdateRVRPayment();
    }
    this.modelRef.hide();
  }
  private AddRVRPayemnt(): void{
    this.rvrPaymentTransactionService.addRVRPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  private UpdateRVRPayment(): void {
    this.rvrPaymentTransactionService.rvrPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
