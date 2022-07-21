import { Component, OnInit } from '@angular/core';
import { ReepaymenttransactioncreateComponent } from './../reepaymenttransactioncreate/reepaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReepaymenttransactiondetailComponent } from './../reepaymenttransactiondetail/reepaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REEPaymentTransaction } from './../../../../entity/models/RentedEquipment/reepayment-transaction';
@Component({
  selector: 'app-reepaymenttransactionlist',
  templateUrl: './reepaymenttransactionlist.component.html',
  styleUrls: ['./reepaymenttransactionlist.component.css']
})
export class ReepaymenttransactionlistComponent implements OnInit {
  reePaymentData: REEPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'REE PAyment Transaction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REEPaymentTransaction>(ReepaymenttransactioncreateComponent, 
      new REEPaymentTransaction(),
      'Create REE Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REEPaymentTransaction>(ReepaymenttransactiondetailComponent,
      this.reePaymentData.find(each => each.Id == id),
      "REE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REEPaymentTransaction>(ReepaymenttransactioncreateComponent,
      this.reePaymentData.find(each => each.Id == id),
      "REE Payment Edit");
  }

}
