import { Component, OnInit } from '@angular/core';
import { PersonalvehiclecreateComponent } from './../personalvehiclecreate/personalvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalvehicledetailComponent } from './../personalvehicledetail/personalvehicledetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PersonalVehicle } from './../../../../entity/models/PersonalVehicle/personal-vehicle';
@Component({
  selector: 'app-personalvehiclelist',
  templateUrl: './personalvehiclelist.component.html',
  styleUrls: ['./personalvehiclelist.component.css']
})
export class PersonalvehiclelistComponent implements OnInit {
  pvData: PersonalVehicle[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PersonalVehicle>(PersonalvehiclecreateComponent, 
      new PersonalVehicle(),
      'Create Personal Vehicle List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalVehicle>(PersonalvehicledetailComponent,
      this.pvData.find(each => each.Id == id),
      "Personal Vehicle Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalVehicle>(PersonalvehiclecreateComponent,
      this.pvData.find(each => each.Id == id),
      "Personal Vehicle Edit");
  }
}
