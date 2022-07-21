import { Component, OnInit } from '@angular/core';
import { SitecreateComponent } from './../sitecreate/sitecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { SitedetailComponent } from './../sitedetail/sitedetail.component';
import { Site } from 'src/app/entity/models/Site/site';
@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent implements OnInit {
  siteData: Site[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<Site>(SitecreateComponent, 
      new Site(),
      'Create Site List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Site>(SitedetailComponent,
      this.siteData.find(each => each.Id == id),
      "Site Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Site>(SitecreateComponent,
      this.siteData.find(each => each.Id == id),
      "Site Edit");
  }
}
