import { Component, OnInit } from '@angular/core';
import { PersonalequipmentcreateComponent } from './../personalequipmentcreate/personalequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalequipmentdetailComponent } from './../personalequipmentdetail/personalequipmentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-personalequipmentlist',
  templateUrl: './personalequipmentlist.component.html',
  styleUrls: ['./personalequipmentlist.component.css']
})
export class PersonalequipmentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Equipment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PersonalequipmentcreateComponent, {
      title: 'Create New Personal Equipment',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PersonalequipmentdetailComponent,{
      title:"Personal Equipment details"
    });
  }

}
