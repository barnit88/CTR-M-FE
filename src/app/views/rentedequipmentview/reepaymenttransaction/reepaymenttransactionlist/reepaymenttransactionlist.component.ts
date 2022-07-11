import { Component, OnInit } from '@angular/core';
import { ReepaymenttransactioncreateComponent } from './../reepaymenttransactioncreate/reepaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReepaymenttransactiondetailComponent } from './../reepaymenttransactiondetail/reepaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-reepaymenttransactionlist',
  templateUrl: './reepaymenttransactionlist.component.html',
  styleUrls: ['./reepaymenttransactionlist.component.css']
})
export class ReepaymenttransactionlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'REE PAyment Transaction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ReepaymenttransactioncreateComponent, {
      title: 'Create New REE Payment',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ReepaymenttransactiondetailComponent,{
      title:"Rented Equipment Expense Payment details"
    });
  }

}
