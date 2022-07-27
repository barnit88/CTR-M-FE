import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVIPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';
import { RVIPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvipayment-transaction';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RVIPaymentTranactionService } from './../../../../services/api-service/RentedVehicleService/rvipayment-tranaction.service';
@Component({
  selector: 'app-rvipaymenttransctioncreate',
  templateUrl: './rvipaymenttransctioncreate.component.html',
  styleUrls: ['./rvipaymenttransctioncreate.component.css']
})
export class RvipaymenttransctioncreateComponent implements OnInit {
  data:RVIPaymentTransaction;
  title:RVIPaymentTransactionTitle.Create;

  constructor(private modelRef: BsModalRef,
    private rviPaymentTranactionService: RVIPaymentTranactionService) { }

  ngOnInit(): void {
  }

  public rviPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRVIPayment();
    } else {
      this.UpdateRVIPayment();
    }
    this.modelRef.hide();
  }

  private AddRVIPayment(): void{
    this.rviPaymentTranactionService.addRVIPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateRVIPayment(): void {
    this.rviPaymentTranactionService.rviPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
  
}
