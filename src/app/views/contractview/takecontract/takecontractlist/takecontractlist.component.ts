import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { TakecontractcreateComponent } from '../takecontractcreate/takecontractcreate.component';
import { TakeContract } from './../../../../entity/models/Contract/take-contract';
import { TakecontractdetailComponent } from './../takecontractdetail/takecontractdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-takecontractlist',
  templateUrl: './takecontractlist.component.html',
  styleUrls: ['./takecontractlist.component.css']
})
export class TakecontractlistComponent implements OnInit {
    tcData: TakeContract[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Take Contract List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<TakeContract>(TakecontractcreateComponent, 
      new TakeContract(),
      'Create TakeContract List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<TakeContract>(TakecontractdetailComponent,
      this.tcData.find(each => each.Id == id),
      "TakeContract Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<TakeContract>(TakecontractcreateComponent,
      this.tcData.find(each => each.Id == id),
      "TakeContract Edit");
  }

}
