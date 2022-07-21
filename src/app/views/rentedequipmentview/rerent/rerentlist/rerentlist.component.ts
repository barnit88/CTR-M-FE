import { Component, OnInit } from '@angular/core';
import { RerentcreateComponent } from './../rerentcreate/rerentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RerentdetailComponent } from './../rerentdetail/rerentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RERent } from 'src/app/entity/models/RentedEquipment/rerent';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';
import { RerpaymenttransactioncreateComponent } from './../../rerpaymenttransaction/rerpaymenttransactioncreate/rerpaymenttransactioncreate.component';
import { RerpaymenttransactiondetailComponent } from './../../rerpaymenttransaction/rerpaymenttransactiondetail/rerpaymenttransactiondetail.component';
@Component({
  selector: 'app-rerentlist',
  templateUrl: './rerentlist.component.html',
  styleUrls: ['./rerentlist.component.css']
})
export class RerentlistComponent implements OnInit {
  rerData: RERPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Rent List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RERPaymentTransaction>(RerpaymenttransactioncreateComponent, 
      new RERPaymentTransaction(),
      'Create RER Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RERPaymentTransaction>(RerpaymenttransactiondetailComponent,
      this.rerData.find(each => each.Id == id),
      "RER Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RERPaymentTransaction>(RerpaymenttransactioncreateComponent,
      this.rerData.find(each => each.Id == id),
      "RER Payment Edit");
  }

}
