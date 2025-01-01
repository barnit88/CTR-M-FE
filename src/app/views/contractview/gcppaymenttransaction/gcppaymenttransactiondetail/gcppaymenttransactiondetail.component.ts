import { Component, OnInit } from '@angular/core';
import { GcppaymenttransactioneditComponent } from '../gcppaymenttransactionedit/gcppaymenttransactionedit.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { IComponent } from 'src/app/views/IComponent';
import { GCPaymentTransaction } from 'src/app/entity/models/Contract/gcpayment-transaction';
@Component({
  selector: 'app-gcppaymenttransactiondetail',
  templateUrl: './gcppaymenttransactiondetail.component.html',
  styleUrls: ['./gcppaymenttransactiondetail.component.css']
})
export class GcppaymenttransactiondetailComponent implements OnInit, IComponent<GCPaymentTransaction> {
  title: string;
  data:GCPaymentTransaction | GCPaymentTransaction[];
  constructor(private genericDetailPopUpService: GenericDetailPopUpService, private genericModalPopUpService: GenericModalPopUpService) { }

  ngOnInit(): void {
  }

  // OpenDetailPopUp() {
  //   this.genericDetailPopUpService.openDetailModal(GcppaymenttransactioneditComponent,{
  //     title:"Client details"
  //   });
  // }
  
  OpenModalPopUp() {
    // this.genericModalPopUpService.openModalPopUpService(GcppaymenttransactioneditComponent, {
    //   title: 'Clent Create',
    // });
  }

}
