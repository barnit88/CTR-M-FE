import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialsoldcreateComponent } from './../materialsoldcreate/materialsoldcreate.component';
import { MaterialsolddetailComponent } from './../materialsolddetail/materialsolddetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-materialsoldlist',
  templateUrl: './materialsoldlist.component.html',
  styleUrls: ['./materialsoldlist.component.css']
})
export class MaterialsoldlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material Sold List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MaterialsoldcreateComponent, {
      title: 'Create New Material Sold',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(MaterialsolddetailComponent,{
      title:" Material Sold Details"
    });
  }

}
