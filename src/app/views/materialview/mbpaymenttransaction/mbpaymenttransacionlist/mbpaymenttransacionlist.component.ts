import { Component, OnInit } from '@angular/core';
import { MbpaymenttransacioncreateComponent } from './../mbpaymenttransacioncreate/mbpaymenttransacioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-mbpaymenttransacionlist',
  templateUrl: './mbpaymenttransacionlist.component.html',
  styleUrls: ['./mbpaymenttransacionlist.component.css']
})
export class MbpaymenttransacionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'MB Payment Transacton List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MbpaymenttransacioncreateComponent, {
      title: 'Create New MB Payment Transaction',
    });
  }
}
