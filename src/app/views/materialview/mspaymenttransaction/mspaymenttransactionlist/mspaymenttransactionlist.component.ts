import { Component, OnInit } from '@angular/core';
import { MspaymenttransactioncreateComponent } from './../mspaymenttransactioncreate/mspaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MspaymenttransactiondetailComponent } from './../mspaymenttransactiondetail/mspaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MSPaymentTransaction } from './../../../../entity/models/Material/mspayment-transaction';
@Component({
  selector: 'app-mspaymenttransactionlist',
  templateUrl: './mspaymenttransactionlist.component.html',
  styleUrls: ['./mspaymenttransactionlist.component.css']
})
export class MspaymenttransactionlistComponent implements OnInit {
  msPaymentData: MSPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'MS Payment Transaction List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MSPaymentTransaction>(MspaymenttransactioncreateComponent, 
      new MSPaymentTransaction(),
      'Create MS Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MSPaymentTransaction>(MspaymenttransactiondetailComponent,
      this.msPaymentData.find(each => each.Id == id),
      "MS Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MSPaymentTransaction>(MspaymenttransactioncreateComponent,
      this.msPaymentData.find(each => each.Id == id),
      "MS Payment Edit");
  }
}
