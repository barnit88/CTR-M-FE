import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialusedcreateComponent } from './../materialusedcreate/materialusedcreate.component';

@Component({
  selector: 'app-materialusedlist',
  templateUrl: './materialusedlist.component.html',
  styleUrls: ['./materialusedlist.component.css']
})
export class MaterialusedlistComponent implements OnInit {

  constructor(private genericModalPopUpService:GenericModalPopUpService) { }

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MaterialusedcreateComponent, {
      title: 'Create New Material USed List',
    });
  }
  title:string="create New Material Used"
  OpenModalPopUp(){
  this.genericModalPopUpService.openDetailModal(MaterialusedcreateComponent,{
    title:"Create New Material Used"
  });
}
}
