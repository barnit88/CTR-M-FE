import { Component, OnInit } from '@angular/core';
import { MaterialboughtcreateComponent } from './../materialboughtcreate/materialboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialboughtdetailComponent } from './../materialboughtdetail/materialboughtdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-materialboughtlist',
  templateUrl: './materialboughtlist.component.html',
  styleUrls: ['./materialboughtlist.component.css']
})
export class MaterialboughtlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material Bought List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MaterialboughtcreateComponent, {
      title: 'Create New Material Bought',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(MaterialboughtdetailComponent,{
      title:" Material Bought Details"
    });
  }
}
