import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialcreateComponent } from './../materialcreate/materialcreate.component';
import { MaterialdetailComponent } from './../materialdetail/materialdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { Material } from './../../../../entity/models/Material/material';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css']
})
export class MateriallistComponent implements OnInit {
  materialData: Material[]= [];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<Material>(MaterialcreateComponent, 
      new Material(),
      'Create Material payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Material>(MaterialdetailComponent,
      this.materialData.find(each => each.Id == id),
      "Material Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Material>(MaterialcreateComponent,
      this.materialData.find(each => each.Id == id),
      "Material Payment Edit");
  }
}
