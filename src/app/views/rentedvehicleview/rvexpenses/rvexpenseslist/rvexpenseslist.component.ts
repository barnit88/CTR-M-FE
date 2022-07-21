import { Component, OnInit } from '@angular/core';
import { RvexpensescreateComponent } from './../rvexpensescreate/rvexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvexpensesdetailComponent } from './../rvexpensesdetail/rvexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVExpenses } from 'src/app/entity/models/RentedVehicle/rvexpenses';
@Component({
  selector: 'app-rvexpenseslist',
  templateUrl: './rvexpenseslist.component.html',
  styleUrls: ['./rvexpenseslist.component.css']
})
export class RvexpenseslistComponent implements OnInit {
  rveData: RVExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVExpenses>(RvexpensescreateComponent, 
      new RVExpenses(),
      'Create RV Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVExpenses>(RvexpensesdetailComponent,
      this.rveData.find(each => each.Id == id),
      "RV Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVExpenses>(RvexpensescreateComponent,
      this.rveData.find(each => each.Id == id),
      "RV Expense Edit");
  }

}
