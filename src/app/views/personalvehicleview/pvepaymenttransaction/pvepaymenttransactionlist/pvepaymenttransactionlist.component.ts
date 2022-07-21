import { Component, OnInit } from '@angular/core';
import { PvepaymenttransactioncreateComponent } from './../pvepaymenttransactioncreate/pvepaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvepaymenttransactiondetailComponent } from './../pvepaymenttransactiondetail/pvepaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVEPaymentTransaction } from 'src/app/entity/models/PersonalVehicle/pvepayment-transaction';
@Component({
  selector: 'app-pvepaymenttransactionlist',
  templateUrl: './pvepaymenttransactionlist.component.html',
  styleUrls: ['./pvepaymenttransactionlist.component.css']
})
export class PvepaymenttransactionlistComponent implements OnInit {
  pvePaymentData: PVEPaymentTransaction[]=[];

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle Equipment Payment  Transaction';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVEPaymentTransaction>(PvepaymenttransactioncreateComponent, 
      new PVEPaymentTransaction(),
      'Create PVE Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVEPaymentTransaction>(PvepaymenttransactiondetailComponent,
      this.pvePaymentData.find(each => each.Id == id),
      "PVE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVEPaymentTransaction>(PvepaymenttransactioncreateComponent,
      this.pvePaymentData.find(each => each.Id == id),
      "PVE Payment Edit");
  }
}
