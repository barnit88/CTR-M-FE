import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialusedcreateComponent } from './../materialusedcreate/materialusedcreate.component';
import { MaterialuseddetailComponent } from './../materialuseddetail/materialuseddetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-materialusedlist',
  templateUrl: './materialusedlist.component.html',
  styleUrls: ['./materialusedlist.component.css']
})
export class MaterialusedlistComponent implements OnInit {
    title:string="create New Material Used"

  constructor(private genericModalPopUpService:GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) { }
  ngOnInit(): void {
  }
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MaterialusedcreateComponent, {
      title: 'Create New Material Used  ',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(MaterialuseddetailComponent,{
      title:" Material Used Details"
    });
  }

}

