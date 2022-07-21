import { Component, OnInit } from '@angular/core';
import { MbpaymenttransacioncreateComponent } from './../mbpaymenttransacioncreate/mbpaymenttransacioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MbpaymenttransaciondetailComponent } from './../mbpaymenttransaciondetail/mbpaymenttransaciondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MBPaymentTransaction } from './../../../../entity/models/Material/mbpayment-transaction';
@Component({
  selector: 'app-mbpaymenttransacionlist',
  templateUrl: './mbpaymenttransacionlist.component.html',
  styleUrls: ['./mbpaymenttransacionlist.component.css']
})
export class MbpaymenttransacionlistComponent implements OnInit {
  mbPaymentData : MBPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'MB Payment Transacton List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MBPaymentTransaction>(MbpaymenttransacioncreateComponent, 
      new MBPaymentTransaction(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MBPaymentTransaction>(MbpaymenttransaciondetailComponent,
      this.mbPaymentData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MBPaymentTransaction>(MbpaymenttransacioncreateComponent,
      this.mbPaymentData.find(each => each.Id == id),
      "Employee Payment Edit");
  }
}
