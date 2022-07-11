import { Component, OnInit } from '@angular/core';
import { ReincomecreateComponent } from './../reincomecreate/reincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RentedequipmentdetailComponent } from './../../rentedequipment/rentedequipmentdetail/rentedequipmentdetail.component';
import { ReincomedetailComponent } from './../reincomedetail/reincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-reincomelist',
  templateUrl: './reincomelist.component.html',
  styleUrls: ['./reincomelist.component.css']
})
export class ReincomelistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ReincomecreateComponent, {
      title: 'Create New RE Icncome',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ReincomedetailComponent,{
      title:"Rented Equipment Income details"
    });
  }
}
