import { Component, OnInit } from '@angular/core';
import { PvincomecreateComponent } from './../pvincomecreate/pvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvincomedetailComponent } from './../pvincomedetail/pvincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVIncome } from 'src/app/entity/models/PersonalVehicle/pvincome';
@Component({
  selector: 'app-pvincomelist',
  templateUrl: './pvincomelist.component.html',
  styleUrls: ['./pvincomelist.component.css']
})
export class PvincomelistComponent implements OnInit {
  pvIncomeData: PVIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVIncome>(PvincomecreateComponent, 
      new PVIncome(),
      'Create PV Income List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIncome>(PvincomedetailComponent,
      this.pvIncomeData.find(each => each.Id == id),
      "PV Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIncome>(PvincomecreateComponent,
      this.pvIncomeData.find(each => each.Id == id),
      "PV Income Edit");
  }
}
