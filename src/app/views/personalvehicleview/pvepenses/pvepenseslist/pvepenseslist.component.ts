import { Component, OnInit } from '@angular/core';
import { PvepensescreateComponent } from './../pvepensescreate/pvepensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-pvepenseslist',
  templateUrl: './pvepenseslist.component.html',
  styleUrls: ['./pvepenseslist.component.css']
})
export class PvepenseslistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvepensescreateComponent, {
      title: 'Create New PVE',
    });
  }
}
