import { Component, OnInit } from '@angular/core';
import { ExtendtakecontractcreateComponent } from './../extendtakecontractcreate/extendtakecontractcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-extendtakecontractlist',
  templateUrl: './extendtakecontractlist.component.html',
  styleUrls: ['./extendtakecontractlist.component.css']
})
export class ExtendtakecontractlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'ExtendTake Contract List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ExtendtakecontractcreateComponent, {
      title: 'Create Extend Take Contract',
    });
  }
}
