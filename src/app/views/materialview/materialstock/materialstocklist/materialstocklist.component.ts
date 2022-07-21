import { Component, OnInit } from '@angular/core';
import { MaterialstockcreateComponent } from './../materialstockcreate/materialstockcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialstockdetailComponent } from './../materialstockdetail/materialstockdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialStock } from './../../../../entity/models/Material/material-stock';
@Component({
  selector: 'app-materialstocklist',
  templateUrl: './materialstocklist.component.html',
  styleUrls: ['./materialstocklist.component.css']
})
export class MaterialstocklistComponent implements OnInit {
  materialStockData : MaterialStock[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material Stock List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialStock>(MaterialstockcreateComponent, 
      new MaterialStock(),
      'Create Material Stock List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialStock>(MaterialstockdetailComponent,
      this.materialStockData.find(each => each.Id == id),
      "Material Stock Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialStock>(MaterialstockcreateComponent,
      this.materialStockData.find(each => each.Id == id),
      "Material Stock Edit");
  }
}
