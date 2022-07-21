import { Component, OnInit } from '@angular/core';
import { ExtendtakecontractcreateComponent } from './../extendtakecontractcreate/extendtakecontractcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ExtendtakecontractdetailComponent } from './../extendtakecontractdetail/extendtakecontractdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-extendtakecontractlist',
  templateUrl: './extendtakecontractlist.component.html',
  styleUrls: ['./extendtakecontractlist.component.css']
})
export class ExtendtakecontractlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'ExtendTake Contract List';

  OpenModalPopUp() {
    // this.genericModalPopUpService.openModalPopUpService(ExtendtakecontractcreateComponent, {
    //   title: 'Create Extend Take Contract',
    // });
  }
  OpenDetailPopUp() {
    // this.genericModalPopUpService.openModalPopUpService(ExtendtakecontractdetailComponent,{
    //   title:"Extend Take Contract Details"
    // });
  }

}
