import { Component, OnInit } from '@angular/core';
import { VendorcreateComponent } from './../vendorcreate/vendorcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Vendors List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(VendorcreateComponent, {
      title: 'Create New Vendor',
    });
  }
}
