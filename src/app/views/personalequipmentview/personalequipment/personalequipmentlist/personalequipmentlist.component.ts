import { Component, OnInit } from '@angular/core';
import { PersonalequipmentcreateComponent } from './../personalequipmentcreate/personalequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-personalequipmentlist',
  templateUrl: './personalequipmentlist.component.html',
  styleUrls: ['./personalequipmentlist.component.css']
})
export class PersonalequipmentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Equipment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PersonalequipmentcreateComponent, {
      title: 'Create New Personal Equipment',
    });
  }

}
