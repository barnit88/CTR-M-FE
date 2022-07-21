import { Component, OnInit } from '@angular/core';
import { PeipaymenttransactioncreateComponent } from './../peipaymenttransactioncreate/peipaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeipaymenttransactiondetailComponent } from './../peipaymenttransactiondetail/peipaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEIPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peipayment-transaction';
@Component({
  selector: 'app-peipaymenttransactionlist',
  templateUrl: './peipaymenttransactionlist.component.html',
  styleUrls: ['./peipaymenttransactionlist.component.css']
})
export class PeipaymenttransactionlistComponent implements OnInit {
  peiPaymentData: PEIPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Equipment Income Payments Transactions';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEIPaymentTransaction>(PeipaymenttransactioncreateComponent, 
      new PEIPaymentTransaction(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIPaymentTransaction>(PeipaymenttransactiondetailComponent,
      this.peiPaymentData.find(each => each.Id == id),
      "PEI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIPaymentTransaction>(PeipaymenttransactioncreateComponent,
      this.peiPaymentData.find(each => each.Id == id),
      "PEI payment Edit");
  }
}
