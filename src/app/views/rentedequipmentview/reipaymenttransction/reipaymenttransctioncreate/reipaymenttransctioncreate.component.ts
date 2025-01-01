import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { REIPaymentTransaction } from 'src/app/entity/models/RentedEquipment/reipayment-transaction';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { REIPaymentTransactionService } from './../../../../services/api-service/RentedEquipmentService/reipayment-transaction.service';
import { REIPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-reipaymenttransctioncreate',
  templateUrl: './reipaymenttransctioncreate.component.html',
  styleUrls: ['./reipaymenttransctioncreate.component.css']
})
export class ReipaymenttransctioncreateComponent implements OnInit {
  data:REIPaymentTransaction;
  title:REIPaymentTransactionTitle.Create;

  constructor(private modelRef: BsModalRef,
    private reiPaymentTransactionService: REIPaymentTransactionService) { }

  ngOnInit(): void {
  }

  public reiPaymentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddREIPayemnt();
    } else {
      this.UpdateREIPayment();
    }
    this.modelRef.hide();
  }

  private AddREIPayemnt(): void{
    this.reiPaymentTransactionService.addREIPaymentTransaction(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateREIPayment(): void {
    this.reiPaymentTransactionService.reiPaymentUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
  
}
