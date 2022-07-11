import { Component, OnInit } from '@angular/core';
import { MbpaymenttransacioncreateComponent } from './../mbpaymenttransacioncreate/mbpaymenttransacioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MbpaymenttransaciondetailComponent } from './../mbpaymenttransaciondetail/mbpaymenttransaciondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-mbpaymenttransacionlist',
  templateUrl: './mbpaymenttransacionlist.component.html',
  styleUrls: ['./mbpaymenttransacionlist.component.css']
})
export class MbpaymenttransacionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'MB Payment Transacton List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MbpaymenttransacioncreateComponent, {
      title: 'Create New MB Payment Transaction',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(MbpaymenttransaciondetailComponent,{
      title:" Material Payment Details"
    });
  }
}
