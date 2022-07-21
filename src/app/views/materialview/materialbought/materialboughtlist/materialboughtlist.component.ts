import { Component, OnInit } from '@angular/core';
import { MaterialboughtcreateComponent } from './../materialboughtcreate/materialboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialboughtdetailComponent } from './../materialboughtdetail/materialboughtdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialBought } from './../../../../entity/models/Material/material-bought';
@Component({
  selector: 'app-materialboughtlist',
  templateUrl: './materialboughtlist.component.html',
  styleUrls: ['./materialboughtlist.component.css']
})
export class MaterialboughtlistComponent implements OnInit {
  materialBoughtData: MaterialBought[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material Bought List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialBought>(MaterialboughtcreateComponent, 
      new MaterialBought(),
      'Create Material Bought List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialBought>(MaterialboughtdetailComponent,
      this.materialBoughtData.find(each => each.Id == id),
      "Material Bought Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialBought>(MaterialboughtcreateComponent,
      this.materialBoughtData.find(each => each.Id == id),
      "Material Bought Edit");
  }
}
