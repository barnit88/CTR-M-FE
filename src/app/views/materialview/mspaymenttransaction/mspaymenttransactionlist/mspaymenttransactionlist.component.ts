import { Component, OnInit } from '@angular/core';
import { MspaymenttransactioncreateComponent } from './../mspaymenttransactioncreate/mspaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-mspaymenttransactionlist',
  templateUrl: './mspaymenttransactionlist.component.html',
  styleUrls: ['./mspaymenttransactionlist.component.css']
})
export class MspaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'MS Payment Transaction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MspaymenttransactioncreateComponent, {
      title: 'Create New MS Payment',
    });
  }
}
