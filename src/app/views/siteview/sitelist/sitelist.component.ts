import { Component, OnInit } from '@angular/core';
import { SitecreateComponent } from './../sitecreate/sitecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Site List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(SitecreateComponent, {
      title: 'Create New Site',
    });
  }

}
