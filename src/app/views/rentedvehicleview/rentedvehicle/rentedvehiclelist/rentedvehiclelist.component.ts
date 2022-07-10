import { Component, OnInit } from '@angular/core';
import { RentedvehiclecreateComponent } from './../rentedvehiclecreate/rentedvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rentedvehiclelist',
  templateUrl: './rentedvehiclelist.component.html',
  styleUrls: ['./rentedvehiclelist.component.css']
})
export class RentedvehiclelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RentedvehiclecreateComponent, {
      title: 'Create New RV',
    });
  }
}
