import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GcppaymenttransactioncreateComponent } from './../gcppaymenttransactioncreate/gcppaymenttransactioncreate.component';
import { GcppaymenttransactiondetailComponent } from './../gcppaymenttransactiondetail/gcppaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-gcppaymenttransactionlist',
  templateUrl: './gcppaymenttransactionlist.component.html',
  styleUrls: ['./gcppaymenttransactionlist.component.css']
})
export class GcppaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Give Contract Transactions Payments';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(GcppaymenttransactioncreateComponent, {
      title: 'Create Client',
    });
  }
  OpenDetailPopUp() {
    this.genericModalPopUpService.openDetailModal(GcppaymenttransactiondetailComponent,{
      title:" Give Contract Payment Details"
    });
  }

}
