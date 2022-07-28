import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GcppaymenttransactioncreateComponent } from './../gcppaymenttransactioncreate/gcppaymenttransactioncreate.component';
import { GcppaymenttransactiondetailComponent } from './../gcppaymenttransactiondetail/gcppaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { GCPaymentTransaction } from './../../../../entity/models/Contract/gcpayment-transaction';
import { GcppaymenttransactioneditComponent } from '../gcppaymenttransactionedit/gcppaymenttransactionedit.component';
import { GCPaymentTransactionTitle } from 'src/app/entity/Enum/Enums';
import { IComponent } from 'src/app/views/IComponent';
@Component({
  selector: 'app-gcppaymenttransactionlist',
  templateUrl: './gcppaymenttransactionlist.component.html',
  styleUrls: ['./gcppaymenttransactionlist.component.css']
})
export class GcppaymenttransactionlistComponent implements OnInit, IComponent<GCPaymentTransaction> {
  title: string;
  data: GCPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  // title: string = 'Give Contract Transactions Payments';

  // OpenModalPopUp() {
  //   this.genericModalPopUpService.openModalPopUpService<GCPaymentTransaction>(GcppaymenttransactioncreateComponent, 
  //     new GCPaymentTransaction(),
  //     'Create GCPaymentTransaction List',
  //   );
  // }
  // //function for details popup
  // OpenDetailPopUp(id: number) {
  //   this.genericModalPopUpService.openModalPopUpService<GCPaymentTransaction>(GcppaymenttransactiondetailComponent,
  //     this.gcpPaymentData.find(each => each.Id == id),
  //     "GCPaymentTransaction Details");
  // }

  // OpenEditPopUp(id: number) {
  //   this.genericModalPopUpService.openModalPopUpService<GCPaymentTransaction>(GcppaymenttransactioncreateComponent,
  //     this.gcpPaymentData.find(each => each.Id == id),
  //     "GCPaymentTransaction Edit");
  // }

  
  OpenCreate(): void {
    this.genericModalPopUpService.openModalPopUpService<GCPaymentTransaction>(GcppaymenttransactioncreateComponent,
      new GCPaymentTransaction(),
      GCPaymentTransactionTitle.Create
    );
  }

  OpenEdit(id: number): void {
    this.genericModalPopUpService.openModalPopUpService<GCPaymentTransaction>(GcppaymenttransactioneditComponent,
      new GCPaymentTransaction(),
      GCPaymentTransactionTitle.Edit
    );
  }

  OpenDetail(id: number): void {
    this.genericModalPopUpService.openModalPopUpService<GCPaymentTransaction>(GcppaymenttransactiondetailComponent,
      new GCPaymentTransaction(),
      GCPaymentTransactionTitle.Detail
    );
  }

  OpenDelete(id: number): void {

  }

}
