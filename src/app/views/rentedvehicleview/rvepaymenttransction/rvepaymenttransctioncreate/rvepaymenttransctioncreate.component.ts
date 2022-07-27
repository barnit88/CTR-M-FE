import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVEPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvepayment-transaction';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RVEPaymentTransactionService } from './../../../../services/api-service/RentedVehicleService/rvepayment-transaction.service';
import { RVEPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';
@Component({
  selector: 'app-rvepaymenttransctioncreate',
  templateUrl: './rvepaymenttransctioncreate.component.html',
  styleUrls: ['./rvepaymenttransctioncreate.component.css']
})
export class RvepaymenttransctioncreateComponent implements OnInit {
  data:RVEPaymentTransaction;
  title:RVEPaymentTransactionTitle.Create;

  constructor(private modelRef: BsModalRef,
    private rvePaymentTransactionService: RVEPaymentTransactionService) { }

  ngOnInit(): void {
  }

  public rvePaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRVEPayment();
    } else {
      this.UpdateRVEPayment();
    }
    this.modelRef.hide();
  }

  private AddRVEPayment(): void{
    this.rvePaymentTransactionService.addRVEPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateRVEPayment(): void {
    this.rvePaymentTransactionService.rvepaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
