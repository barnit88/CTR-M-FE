import { Component, OnInit } from '@angular/core';
import { REEPaymentTransaction } from './../../../../entity/models/RentedEquipment/reepayment-transaction';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { REEPaymentTransactionService } from 'src/app/services/api-service/RentedEquipmentService/reepayment-transaction.service';
import { REEPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-reepaymenttransactioncreate',
  templateUrl: './reepaymenttransactioncreate.component.html',
  styleUrls: ['./reepaymenttransactioncreate.component.css']
})
export class ReepaymenttransactioncreateComponent implements OnInit {
  data: REEPaymentTransaction;
  title:REEPaymentTransactionTitle.Create;

  constructor(private modelRef: BsModalRef,
    private reePaymentTransactionService: REEPaymentTransactionService) { }

  ngOnInit(): void {
  }

  
public reePaymentSubmit() : void {
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
        this.AddREEPayment();
    } else {
        this.UpdateREEPayment();
    }
    this.modelRef.hide();
}

private AddREEPayment() : void {
    this.reePaymentTransactionService.addREEPaymentTransaction(this.data).subscribe((response) => console.log('done with adding ' + response), (error) => console.log(error));
}

private UpdateREEPayment() : void {
    this.reePaymentTransactionService.reePaymentUpdate(this.data.Id, this.data).subscribe((response) => console.log('done with update' + response), (error) => console.log(error));
}


}
