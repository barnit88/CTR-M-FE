import { Component, OnInit } from '@angular/core';
import { RvexpensescreateComponent } from './../rvexpensescreate/rvexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rvexpenseslist',
  templateUrl: './rvexpenseslist.component.html',
  styleUrls: ['./rvexpenseslist.component.css']
})
export class RvexpenseslistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvexpensescreateComponent, {
      title: 'Create New RVE',
    });
  }

}
