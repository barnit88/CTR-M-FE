import { Component, OnInit } from '@angular/core';
import { RvexpensescreateComponent } from './../rvexpensescreate/rvexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvexpensesdetailComponent } from './../rvexpensesdetail/rvexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rvexpenseslist',
  templateUrl: './rvexpenseslist.component.html',
  styleUrls: ['./rvexpenseslist.component.css']
})
export class RvexpenseslistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvexpensescreateComponent, {
      title: 'Create New RVE',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RvexpensesdetailComponent,{
      title:"Client details"
    });
  }

}
