import { Component, OnInit } from '@angular/core';
import { PvepensescreateComponent } from './../pvepensescreate/pvepensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvepensesdetailComponent } from './../pvepensesdetail/pvepensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVExpenses } from './../../../../entity/models/PersonalVehicle/pvexpenses';
@Component({
  selector: 'app-pvepenseslist',
  templateUrl: './pvepenseslist.component.html',
  styleUrls: ['./pvepenseslist.component.css']
})
export class PvepenseslistComponent implements OnInit {
  pvExpenseData: PVExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVExpenses>(PvepensescreateComponent, 
      new PVExpenses(),
      'Create PV Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVExpenses>(PvepensesdetailComponent,
      this.pvExpenseData.find(each => each.Id == id),
      "PV Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVExpenses>(PvepensescreateComponent,
      this.pvExpenseData.find(each => each.Id == id),
      "PV Expense Edit");
  }
}
