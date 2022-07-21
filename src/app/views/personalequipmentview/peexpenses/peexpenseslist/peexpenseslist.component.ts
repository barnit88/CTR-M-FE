import { Component, OnInit } from '@angular/core';
import { PeexpensescreateComponent } from './../peexpensescreate/peexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeexpensesdetailComponent } from './../peexpensesdetail/peexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEExpenses } from './../../../../entity/models/PersonalEquipment/peexpenses';
@Component({
  selector: 'app-peexpenseslist',
  templateUrl: './peexpenseslist.component.html',
  styleUrls: ['./peexpenseslist.component.css']
})
export class PeexpenseslistComponent implements OnInit {
  peExpenseData: PEExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService , private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PE Expense List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEExpenses>(PeexpensescreateComponent, 
      new PEExpenses(),
      'Create PE Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEExpenses>(PeexpensesdetailComponent,
      this.peExpenseData.find(each => each.Id == id),
      "PE Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEExpenses>(PeexpensescreateComponent,
      this.peExpenseData.find(each => each.Id == id),
      "PE Expense Edit");
  }

}
