import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialusedcreateComponent } from './../materialusedcreate/materialusedcreate.component';
import { MaterialuseddetailComponent } from './../materialuseddetail/materialuseddetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';

@Component({
  selector: 'app-materialusedlist',
  templateUrl: './materialusedlist.component.html',
  styleUrls: ['./materialusedlist.component.css']
})
export class MaterialusedlistComponent implements OnInit {
  materialUsedData : MaterialUsed[]=[];
    title:string="create New Material Used"

  constructor(private genericModalPopUpService:GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) { }
  ngOnInit(): void {
  }
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialUsed>(MaterialusedcreateComponent, 
      new MaterialUsed(),
      'Create Material Used List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialUsed>(MaterialuseddetailComponent,
      this.materialUsedData.find(each => each.Id == id),
      "Material Used Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialUsed>(MaterialusedcreateComponent,
      this.materialUsedData.find(each => each.Id == id),
      "Material Used Edit");
  }
}

