import { Component, OnInit } from '@angular/core';
import { PvboughtcreateComponent } from './../pvboughtcreate/pvboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvboughtdetailComponent } from './../pvboughtdetail/pvboughtdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVBought } from './../../../../entity/models/PersonalVehicle/pvbought';
@Component({
  selector: 'app-pvboughtlist',
  templateUrl: './pvboughtlist.component.html',
  styleUrls: ['./pvboughtlist.component.css']
})
export class PvboughtlistComponent implements OnInit {
  pvBoughtData: PVBought[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Bought List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVBought>(PvboughtcreateComponent, 
      new PVBought(),
      'Create PV Bought List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBought>(PvboughtdetailComponent,
      this.pvBoughtData.find(each => each.Id == id),
      "PV Bought Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBought>(PvboughtcreateComponent,
      this.pvBoughtData.find(each => each.Id == id),
      "PV Bought Edit");
  }
}
