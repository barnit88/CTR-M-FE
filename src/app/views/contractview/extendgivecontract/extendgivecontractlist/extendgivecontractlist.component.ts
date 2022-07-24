import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from 'src/app/views/clientview/clientdetail/clientdetail.component';
import { ExtendgivecontractcreateComponent } from './../extendgivecontractcreate/extendgivecontractcreate.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ExtendgivecontractdetailComponent } from './../extendgivecontractdetail/extendgivecontractdetail.component';
import { ExtendGiveContract } from './../../../../entity/models/Contract/extend-give-contract';
import { ClientTitle, ExtendGiveContractTitle } from 'src/app/entity/Enum/Enums';
import { IComponent } from 'src/app/views/IComponent';


@Component({
  selector: 'app-extendgivecontractlist',
  templateUrl: './extendgivecontractlist.component.html',
  styleUrls: ['./extendgivecontractlist.component.css']
})
export class ExtendgivecontractlistComponent implements OnInit,IComponent<ExtendGiveContract> {


  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) { }

  data: ExtendGiveContract | ExtendGiveContract[];
  title: string;

  ngOnInit(): void { }

  // OpenModalPopUp() {
  //   this.genericModalPopUpService.openModalPopUpService<ExtendGiveContract>(ExtendgivecontractcreateComponent, 
  //     new ExtendGiveContract(),
  //     'Create ExtendGiveContract List',
  //   );
  // }
  // //function for details popup
  // OpenDetailPopUp(id: number) {
  //   this.genericModalPopUpService.openModalPopUpService<ExtendGiveContract>(ExtendgivecontractdetailComponent,
  //     this.egcData.find(each => each.Id == id),
  //     "ExtendGiveContract Details");
  // }

  // OpenEditPopUp(id: number) {
  //   this.genericModalPopUpService.openModalPopUpService<ExtendGiveContract>(ExtendgivecontractcreateComponent,
  //     this.egcData.find(each => each.Id == id),
  //     "ExtendGiveContract Edit");
  // }

  OpenCreate(): void {
    this.genericModalPopUpService.openModalPopUpService<ExtendGiveContract>(ExtendgivecontractcreateComponent,
      new ExtendGiveContract(),
      ExtendGiveContractTitle.Create
    );
  }

  OpenEdit(id: number): void {
    this.genericModalPopUpService.openModalPopUpService<ExtendGiveContract>(ExtendgivecontractcreateComponent,
      new ExtendGiveContract(),
      ExtendGiveContractTitle.Edit
    );
  }

  OpenDetail(id: number): void {
    this.genericModalPopUpService.openModalPopUpService<ExtendGiveContract>(ExtendgivecontractdetailComponent,
      new ExtendGiveContract(),
      ExtendGiveContractTitle.Detail
    );
  }

  OpenDelete(id: number): void {

  }
}