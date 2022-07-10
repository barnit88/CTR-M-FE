import { Component, OnInit } from '@angular/core';
import { PersonalvehiclecreateComponent } from './../personalvehiclecreate/personalvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-personalvehiclelist',
  templateUrl: './personalvehiclelist.component.html',
  styleUrls: ['./personalvehiclelist.component.css']
})
export class PersonalvehiclelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PersonalvehiclecreateComponent, {
      title: 'Create New Persoanl Vehicle',
    });
  }
}
