import { Component, OnInit } from '@angular/core';
import { TcppaymenttransactioncreateComponent } from './../tcppaymenttransactioncreate/tcppaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { TcppaymenttransactiondetailComponent } from './../tcppaymenttransactiondetail/tcppaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-tcppaymenttransactionlist',
  templateUrl: './tcppaymenttransactionlist.component.html',
  styleUrls: ['./tcppaymenttransactionlist.component.css']
})
export class TcppaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Take Contract Payments';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(TcppaymenttransactioncreateComponent, {
      title: 'Create TCP Payment',
    });
  }
  OpenDetailPopUp() {
    this.genericModalPopUpService.openDetailModal(TcppaymenttransactiondetailComponent,{
      title:"Take Contract Payment Details"
    });
  }

}
