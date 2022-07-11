import { Component, OnInit } from '@angular/core';
import { RvincomecreateComponent } from './../rvincomecreate/rvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvincomedetailComponent } from './../rvincomedetail/rvincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rvincomelist',
  templateUrl: './rvincomelist.component.html',
  styleUrls: ['./rvincomelist.component.css']
})
export class RvincomelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented vehicle Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvincomecreateComponent, {
      title: 'Create New RVI',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RvincomedetailComponent,{
      title:"Client details"
    });
  }
}
