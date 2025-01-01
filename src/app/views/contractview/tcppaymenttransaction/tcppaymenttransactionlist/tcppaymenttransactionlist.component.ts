import { Component, OnInit } from '@angular/core';
import { TcppaymenttransactioncreateComponent } from './../tcppaymenttransactioncreate/tcppaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { TcppaymenttransactiondetailComponent } from './../tcppaymenttransactiondetail/tcppaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { TCPaymentTransaction } from './../../../../entity/models/Contract/tcpayment-transaction';
@Component({
  selector: 'app-tcppaymenttransactionlist',
  templateUrl: './tcppaymenttransactionlist.component.html',
  styleUrls: ['./tcppaymenttransactionlist.component.css']
})
export class TcppaymenttransactionlistComponent implements OnInit {
  tcPaymentData: TCPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Take Contract Payments';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<TCPaymentTransaction>(TcppaymenttransactioncreateComponent, 
      new TCPaymentTransaction(),
      'Create TCPaymentTransaction List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<TCPaymentTransaction>(TcppaymenttransactiondetailComponent,
      this.tcPaymentData.find(each => each.Id == id),
      "TCPaymentTransaction Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<TCPaymentTransaction>(TcppaymenttransactioncreateComponent,
      this.tcPaymentData.find(each => each.Id == id),
      "TCPaymentTransaction Edit");
  }
}
