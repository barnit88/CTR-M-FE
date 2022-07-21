import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialsoldcreateComponent } from './../materialsoldcreate/materialsoldcreate.component';
import { MaterialsolddetailComponent } from './../materialsolddetail/materialsolddetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialSold } from './../../../../entity/models/Material/material-sold';

@Component({
  selector: 'app-materialsoldlist',
  templateUrl: './materialsoldlist.component.html',
  styleUrls: ['./materialsoldlist.component.css']
})
export class MaterialsoldlistComponent implements OnInit {
  materialSoldData: MaterialSold[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material Sold List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialSold>(MaterialsoldcreateComponent, 
      new MaterialSold(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialSold>(MaterialsolddetailComponent,
      this.materialSoldData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialSold>(MaterialsoldcreateComponent,
      this.materialSoldData.find(each => each.Id == id),
      "Material Sold Edit");
  }

}
