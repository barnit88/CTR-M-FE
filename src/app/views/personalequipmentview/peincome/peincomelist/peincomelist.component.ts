import { Component, OnInit } from '@angular/core';
import { PeincomecreateComponent } from './../peincomecreate/peincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeincomedetailComponent } from './../peincomedetail/peincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEIncome } from './../../../../entity/models/PersonalEquipment/peincome';
@Component({
  selector: 'app-peincomelist',
  templateUrl: './peincomelist.component.html',
  styleUrls: ['./peincomelist.component.css']
})
export class PeincomelistComponent implements OnInit {
  peIncomeData: PEIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PE Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEIncome>(PeincomecreateComponent, 
      new PEIncome(),
      'Create PE Income List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIncome>(PeincomedetailComponent,
      this.peIncomeData.find(each => each.Id == id),
      "PE Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIncome>(PeincomecreateComponent,
      this.peIncomeData.find(each => each.Id == id),
      "PE Income Edit");
  }

}
