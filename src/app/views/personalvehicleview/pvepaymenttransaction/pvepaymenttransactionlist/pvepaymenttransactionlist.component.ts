import { Component, OnInit } from '@angular/core';
import { PvepaymenttransactioncreateComponent } from './../pvepaymenttransactioncreate/pvepaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvepaymenttransactiondetailComponent } from './../pvepaymenttransactiondetail/pvepaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-pvepaymenttransactionlist',
  templateUrl: './pvepaymenttransactionlist.component.html',
  styleUrls: ['./pvepaymenttransactionlist.component.css']
})
export class PvepaymenttransactionlistComponent implements OnInit {


  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle Equipment Payment  Transaction';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvepaymenttransactioncreateComponent, {
      title: 'Create New Personal Vehicle',
    });

  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PvepaymenttransactiondetailComponent,{
      title:"Personal Vehichle Expense Payment details"
    });
  }
}
