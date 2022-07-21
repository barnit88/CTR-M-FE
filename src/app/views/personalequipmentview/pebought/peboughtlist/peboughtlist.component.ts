import { Component, OnInit } from '@angular/core';
import { PeboughtcreateComponent } from './../peboughtcreate/peboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeboughtdetailComponent } from './../peboughtdetail/peboughtdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEBought } from './../../../../entity/models/PersonalEquipment/pebought';
@Component({
  selector: 'app-peboughtlist',
  templateUrl: './peboughtlist.component.html',
  styleUrls: ['./peboughtlist.component.css']
})
export class PeboughtlistComponent implements OnInit {
  peBoughtData : PEBought[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PE Bought List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEBought>(PeboughtcreateComponent, 
      new PEBought(),
      'Create PE Bought List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBought>(PeboughtdetailComponent,
      this.peBoughtData.find(each => each.Id == id),
      "PE Bought Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBought>(PeboughtcreateComponent,
      this.peBoughtData.find(each => each.Id == id),
      "PE Bought Edit");
  }
}
