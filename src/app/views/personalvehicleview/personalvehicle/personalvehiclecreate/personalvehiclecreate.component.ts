import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-personalvehiclecreate',
  templateUrl: './personalvehiclecreate.component.html',
  styleUrls: ['./personalvehiclecreate.component.css']
})
export class PersonalvehiclecreateComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vechicle List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PersonalvehiclecreateComponent, {
      title: 'Create New Personal Vehicle',
    });
  }

}
