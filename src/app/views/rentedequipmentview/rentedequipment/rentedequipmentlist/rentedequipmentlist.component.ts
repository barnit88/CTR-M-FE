import { Component, OnInit } from '@angular/core';
import { RentedequipmentcreateComponent } from './../rentedequipmentcreate/rentedequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RentedequipmentdetailComponent } from './../rentedequipmentdetail/rentedequipmentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RentedEquipment } from 'src/app/entity/models/RentedEquipment/rented-equipment';
@Component({
  selector: 'app-rentedequipmentlist',
  templateUrl: './rentedequipmentlist.component.html',
  styleUrls: ['./rentedequipmentlist.component.css']
})
export class RentedequipmentlistComponent implements OnInit {
  reData: RentedEquipment[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RentedEquipment>(RentedequipmentcreateComponent, 
      new RentedEquipment(),
      'Create Rented Equipment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedEquipment>(RentedequipmentdetailComponent,
      this.reData.find(each => each.Id == id),
      "Rented Equipment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedEquipment>(RentedequipmentcreateComponent,
      this.reData.find(each => each.Id == id),
      "Rented Equipment Edit");
  }
}
