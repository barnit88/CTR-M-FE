import { Component, OnInit } from '@angular/core';
import { RvrentcreateComponent } from './../rvrentcreate/rvrentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvrentdetailComponent } from './../rvrentdetail/rvrentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rvrentlist',
  templateUrl: './rvrentlist.component.html',
  styleUrls: ['./rvrentlist.component.css']
})
export class RvrentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rent Vehicle Rent List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvrentcreateComponent, {
      title: 'Create New RVR',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RvrentdetailComponent,{
      title:"Rented Vehicle Rent details"
    });
  }
}
