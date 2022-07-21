import { Component, OnInit } from '@angular/core';
import { PvbpaymenttransactioncreateComponent } from './../pvbpaymenttransactioncreate/pvbpaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvbpaymenttransactiondetailComponent } from './../pvbpaymenttransactiondetail/pvbpaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVBPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvbpayment-transaction';
@Component({
  selector: 'app-pvbpaymenttransactionlist',
  templateUrl: './pvbpaymenttransactionlist.component.html',
  styleUrls: ['./pvbpaymenttransactionlist.component.css']
})
export class PvbpaymenttransactionlistComponent implements OnInit {
  pvbPaymentData: PVBPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle Bought Transaction List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVBPaymentTransaction>(PvbpaymenttransactioncreateComponent, 
      new PVBPaymentTransaction(),
      'Create PVB Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBPaymentTransaction>(PvbpaymenttransactiondetailComponent,
      this.pvbPaymentData.find(each => each.Id == id),
      "PVB Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBPaymentTransaction>(PvbpaymenttransactioncreateComponent,
      this.pvbPaymentData.find(each => each.Id == id),
      "PVB Payment Edit");
  }
}
