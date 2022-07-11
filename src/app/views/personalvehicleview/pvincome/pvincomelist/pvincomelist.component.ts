import { Component, OnInit } from '@angular/core';
import { PvincomecreateComponent } from './../pvincomecreate/pvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvincomedetailComponent } from './../pvincomedetail/pvincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-pvincomelist',
  templateUrl: './pvincomelist.component.html',
  styleUrls: ['./pvincomelist.component.css']
})
export class PvincomelistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvincomecreateComponent, {
      title: 'Create New PVI',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PvincomedetailComponent,{
      title:"Personal Vehicle Income details"
    });
  }
}
