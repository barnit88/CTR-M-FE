import { Component, OnInit } from '@angular/core';
import { RentedvehiclecreateComponent } from './../rentedvehiclecreate/rentedvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from 'src/app/views/clientview/clientdetail/clientdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RentedVehicle } from 'src/app/entity/models/RentedVehicle/rented-vehicle';
@Component({
  selector: 'app-rentedvehiclelist',
  templateUrl: './rentedvehiclelist.component.html',
  styleUrls: ['./rentedvehiclelist.component.css']
})
export class RentedvehiclelistComponent implements OnInit {
  rvData: RentedVehicle[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RentedVehicle>(RentedvehiclecreateComponent, 
      new RentedVehicle(),
      'Create Rented Vehicle List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedVehicle>(RentedvehiclecreateComponent,
      this.rvData.find(each => each.Id == id),
      "Rented Vehicle Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RentedVehicle>(RentedvehiclecreateComponent,
      this.rvData.find(each => each.Id == id),
      "Rented Vehicle Edit");
  }
}
