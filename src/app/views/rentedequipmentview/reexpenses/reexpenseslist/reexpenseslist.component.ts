import { Component, OnInit } from '@angular/core';
import { ReexpensescreateComponent } from './../reexpensescreate/reexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReexpensesdetailComponent } from './../reexpensesdetail/reexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-reexpenseslist',
  templateUrl: './reexpenseslist.component.html',
  styleUrls: ['./reexpenseslist.component.css']
})
export class ReexpenseslistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'RE Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ReexpensescreateComponent, {
      title: 'Create New RE Expense',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ReexpensesdetailComponent,{
      title:"Rented Equipment Expense details"
    });
  }

}
