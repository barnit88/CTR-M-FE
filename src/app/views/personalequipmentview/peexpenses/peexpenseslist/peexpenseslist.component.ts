import { Component, OnInit } from '@angular/core';
import { PeexpensescreateComponent } from './../peexpensescreate/peexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeexpensesdetailComponent } from './../peexpensesdetail/peexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-peexpenseslist',
  templateUrl: './peexpenseslist.component.html',
  styleUrls: ['./peexpenseslist.component.css']
})
export class PeexpenseslistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService , private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PE Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PeexpensescreateComponent, {
      title: 'Create New PE Expense',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PeexpensesdetailComponent,{
      title:" Personal Equipment Expense Details"
    });
  }

}
