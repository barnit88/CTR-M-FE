import { Component, OnInit } from '@angular/core';
import { ReincomecreateComponent } from './../reincomecreate/reincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RentedequipmentdetailComponent } from './../../rentedequipment/rentedequipmentdetail/rentedequipmentdetail.component';
import { ReincomedetailComponent } from './../reincomedetail/reincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REIncome } from 'src/app/entity/models/RentedEquipment/reincome';
@Component({
  selector: 'app-reincomelist',
  templateUrl: './reincomelist.component.html',
  styleUrls: ['./reincomelist.component.css']
})
export class ReincomelistComponent implements OnInit {
  reiData: REIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REIncome>(ReincomecreateComponent, 
      new REIncome(),
      'Create RE Income List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIncome>(ReincomedetailComponent,
      this.reiData.find(each => each.Id == id),
      "RE Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIncome>(ReincomecreateComponent,
      this.reiData.find(each => each.Id == id),
      "RE Income Edit");
  }
}
