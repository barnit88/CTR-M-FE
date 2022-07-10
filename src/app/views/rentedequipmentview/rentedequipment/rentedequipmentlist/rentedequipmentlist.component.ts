import { Component, OnInit } from '@angular/core';
import { RentedequipmentcreateComponent } from './../rentedequipmentcreate/rentedequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rentedequipmentlist',
  templateUrl: './rentedequipmentlist.component.html',
  styleUrls: ['./rentedequipmentlist.component.css']
})
export class RentedequipmentlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RentedequipmentcreateComponent, {
      title: 'Create New RE',
    });
  }
}
