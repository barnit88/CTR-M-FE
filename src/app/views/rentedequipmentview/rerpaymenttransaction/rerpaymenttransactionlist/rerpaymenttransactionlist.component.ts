import { Component, OnInit } from '@angular/core';
import { RerpaymenttransactioncreateComponent } from './../rerpaymenttransactioncreate/rerpaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rerpaymenttransactionlist',
  templateUrl: './rerpaymenttransactionlist.component.html',
  styleUrls: ['./rerpaymenttransactionlist.component.css']
})
export class RerpaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Rent Payment Transaction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RerpaymenttransactioncreateComponent, {
      title: 'Create New RER Payment',
    });
  }

}
