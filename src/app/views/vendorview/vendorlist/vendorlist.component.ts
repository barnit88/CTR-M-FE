import { Component, OnInit } from '@angular/core';
import { VendorcreateComponent } from './../vendorcreate/vendorcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Vendors List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(VendorcreateComponent, {
      title: 'Create New Vendor',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ClientdetailComponent,{
      title:"Vendor Details"
    });
  }
}
