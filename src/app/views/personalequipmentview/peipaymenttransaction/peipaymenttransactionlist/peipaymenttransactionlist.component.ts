import { Component, OnInit } from '@angular/core';
import { PeipaymenttransactioncreateComponent } from './../peipaymenttransactioncreate/peipaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeipaymenttransactiondetailComponent } from './../peipaymenttransactiondetail/peipaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-peipaymenttransactionlist',
  templateUrl: './peipaymenttransactionlist.component.html',
  styleUrls: ['./peipaymenttransactionlist.component.css']
})
export class PeipaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Equipment Income Payments Transactions';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PeipaymenttransactioncreateComponent, {
      title: 'Create New PEI Payment',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PeipaymenttransactiondetailComponent,{
      title:"Personal Equipment Income Payment details"
    });
  }

}
