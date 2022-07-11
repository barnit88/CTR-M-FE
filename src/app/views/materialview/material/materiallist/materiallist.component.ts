import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialcreateComponent } from './../materialcreate/materialcreate.component';
import { MaterialdetailComponent } from './../materialdetail/materialdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css']
})
export class MateriallistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MaterialcreateComponent, {
      title: 'Create New Material',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(MaterialdetailComponent,{
      title:" Material  Details"
    });
  }
}
