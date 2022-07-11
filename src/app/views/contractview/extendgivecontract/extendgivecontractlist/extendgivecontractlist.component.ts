import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from 'src/app/views/clientview/clientdetail/clientdetail.component';
import { ExtendgivecontractcreateComponent } from './../extendgivecontractcreate/extendgivecontractcreate.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ExtendgivecontractdetailComponent } from './../extendgivecontractdetail/extendgivecontractdetail.component';


@Component({
  selector: 'app-extendgivecontractlist',
  templateUrl: './extendgivecontractlist.component.html',
  styleUrls: ['./extendgivecontractlist.component.css']
})
export class ExtendgivecontractlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'EGC List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ExtendgivecontractcreateComponent, {
      title: 'Create EGC',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ExtendgivecontractdetailComponent,{
      title:"Extend Give Contract Details"
    });
  }
}
