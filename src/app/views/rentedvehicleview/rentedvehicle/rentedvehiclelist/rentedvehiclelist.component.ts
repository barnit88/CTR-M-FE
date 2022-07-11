import { Component, OnInit } from '@angular/core';
import { RentedvehiclecreateComponent } from './../rentedvehiclecreate/rentedvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from 'src/app/views/clientview/clientdetail/clientdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rentedvehiclelist',
  templateUrl: './rentedvehiclelist.component.html',
  styleUrls: ['./rentedvehiclelist.component.css']
})
export class RentedvehiclelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RentedvehiclecreateComponent, {
      title: 'Create New RV',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ClientdetailComponent,{
      title:"Client details"
    });
  }
}
