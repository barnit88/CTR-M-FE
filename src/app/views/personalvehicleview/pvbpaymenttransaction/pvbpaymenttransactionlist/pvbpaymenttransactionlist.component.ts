import { Component, OnInit } from '@angular/core';
import { PvbpaymenttransactioncreateComponent } from './../pvbpaymenttransactioncreate/pvbpaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvbpaymenttransactiondetailComponent } from './../pvbpaymenttransactiondetail/pvbpaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-pvbpaymenttransactionlist',
  templateUrl: './pvbpaymenttransactionlist.component.html',
  styleUrls: ['./pvbpaymenttransactionlist.component.css']
})
export class PvbpaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle Bought Transaction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvbpaymenttransactioncreateComponent, {
      title: 'Create New PVB Payment ',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PvbpaymenttransactiondetailComponent,{
      title:"Personal Vehicle payment details"
    });
  }
}
