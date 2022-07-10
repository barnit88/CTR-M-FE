import { Component, OnInit } from '@angular/core';
import { PvbpaymenttransactioncreateComponent } from './../pvbpaymenttransactioncreate/pvbpaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-pvbpaymenttransactionlist',
  templateUrl: './pvbpaymenttransactionlist.component.html',
  styleUrls: ['./pvbpaymenttransactionlist.component.css']
})
export class PvbpaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle Bought Transaction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvbpaymenttransactioncreateComponent, {
      title: 'Create New PEV Transaction ',
    });
  }
}
