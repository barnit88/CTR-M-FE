import { Component, OnInit } from '@angular/core';
import { PersonalvehiclecreateComponent } from './../personalvehiclecreate/personalvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalvehicledetailComponent } from './../personalvehicledetail/personalvehicledetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-personalvehiclelist',
  templateUrl: './personalvehiclelist.component.html',
  styleUrls: ['./personalvehiclelist.component.css']
})
export class PersonalvehiclelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PersonalvehiclecreateComponent, {
      title: 'Create New Persoanl Vehicle',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PersonalvehicledetailComponent,{
      title:"Personal Vehicle details"
    });
  }
}
