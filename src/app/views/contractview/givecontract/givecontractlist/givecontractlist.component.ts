import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GivecontractcreateComponent } from './../givecontractcreate/givecontractcreate.component';
import { GivecontractdetailComponent } from './../givecontractdetail/givecontractdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { GiveContract } from './../../../../entity/models/Contract/give-contract';

@Component({
  selector: 'app-givecontractlist',
  templateUrl: './givecontractlist.component.html',
  styleUrls: ['./givecontractlist.component.css']
})
export class GivecontractlistComponent implements OnInit {
  gcData: GiveContract[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Give Contract Lists';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<GiveContract>(GivecontractcreateComponent, 
      new GiveContract(),
      'Create GiveContract List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<GiveContract>(GivecontractdetailComponent,
      this.gcData.find(each => each.Id == id),
      "GiveContract Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<GiveContract>(GivecontractcreateComponent,
      this.gcData.find(each => each.Id == id),
      "GiveContract Edit");
  }

}
