import { Component, OnInit } from '@angular/core';
import { RentedequipmentcreateComponent } from './../rentedequipmentcreate/rentedequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RentedequipmentdetailComponent } from './../rentedequipmentdetail/rentedequipmentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rentedequipmentlist',
  templateUrl: './rentedequipmentlist.component.html',
  styleUrls: ['./rentedequipmentlist.component.css']
})
export class RentedequipmentlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RentedequipmentcreateComponent, {
      title: 'Create New RE',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RentedequipmentdetailComponent,{
      title:"Rented Equipment details"
    });
  }
}
