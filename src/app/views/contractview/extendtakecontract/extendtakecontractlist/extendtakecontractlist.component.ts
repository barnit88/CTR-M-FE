import { Component, OnInit } from '@angular/core';
import { ExtendtakecontractcreateComponent } from './../extendtakecontractcreate/extendtakecontractcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ExtendtakecontractdetailComponent } from './../extendtakecontractdetail/extendtakecontractdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ExtendTakeContract } from './../../../../entity/models/Contract/extend-take-contract';
@Component({
  selector: 'app-extendtakecontractlist',
  templateUrl: './extendtakecontractlist.component.html',
  styleUrls: ['./extendtakecontractlist.component.css']
})
export class ExtendtakecontractlistComponent implements OnInit {
  etcData: ExtendTakeContract[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'ExtendTake Contract List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<ExtendTakeContract>(ExtendtakecontractcreateComponent, 
      new ExtendTakeContract(),
      'Create ExtendTakeContract List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<ExtendTakeContract>(ExtendtakecontractdetailComponent,
      this.etcData.find(each => each.Id == id),
      "ExtendTakeContract Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<ExtendTakeContract>(ExtendtakecontractcreateComponent,
      this.etcData.find(each => each.Id == id),
      "ExtendTakeContract Edit");
  }

}
