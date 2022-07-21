import { Component, OnInit } from '@angular/core';
import { PersonalequipmentcreateComponent } from './../personalequipmentcreate/personalequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalequipmentdetailComponent } from './../personalequipmentdetail/personalequipmentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PersonalEquipment } from './../../../../entity/models/PersonalEquipment/personal-equipment';
@Component({
  selector: 'app-personalequipmentlist',
  templateUrl: './personalequipmentlist.component.html',
  styleUrls: ['./personalequipmentlist.component.css']
})
export class PersonalequipmentlistComponent implements OnInit {
  peData: PersonalEquipment[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Personal Equipment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PersonalEquipment>(PersonalequipmentcreateComponent, 
      new PersonalEquipment(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalEquipment>(PersonalequipmentdetailComponent,
      this.peData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalEquipment>(PersonalequipmentcreateComponent,
      this.peData.find(each => each.Id == id),
      "Personal Equipment Edit");
  }

}
