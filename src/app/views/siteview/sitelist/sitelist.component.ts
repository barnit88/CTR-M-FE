import { Component, OnInit } from '@angular/core';
import { SitecreateComponent } from './../sitecreate/sitecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { SitedetailComponent } from './../sitedetail/sitedetail.component';
@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Site List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(SitecreateComponent, {
      title: 'Create New Site',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(SitedetailComponent,{
      title:"Site details"
    });
  }
}
