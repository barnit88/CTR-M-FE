import { Component, OnInit } from '@angular/core';
import { ReexpensescreateComponent } from './../reexpensescreate/reexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReexpensesdetailComponent } from './../reexpensesdetail/reexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REExpenses } from 'src/app/entity/models/RentedEquipment/reexpenses';
@Component({
  selector: 'app-reexpenseslist',
  templateUrl: './reexpenseslist.component.html',
  styleUrls: ['./reexpenseslist.component.css']
})
export class ReexpenseslistComponent implements OnInit {
  reExpenseData: REExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'RE Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REExpenses>(ReexpensescreateComponent, 
      new REExpenses(),
      'Create RE Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REExpenses>(ReexpensesdetailComponent,
      this.reExpenseData.find(each => each.Id == id),
      "RE Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REExpenses>(ReexpensescreateComponent,
      this.reExpenseData.find(each => each.Id == id),
      "RE Expense Edit");
  }

}
