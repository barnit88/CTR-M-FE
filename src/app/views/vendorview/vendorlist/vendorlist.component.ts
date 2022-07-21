import { Component, OnInit } from '@angular/core';
import { VendorcreateComponent } from './../vendorcreate/vendorcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
import { VendordetailComponent } from './../vendordetail/vendordetail.component';
import { Vendor } from 'src/app/entity/models/Vendor/vendor';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {
  vendorData: Vendor[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Vendors List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<Vendor>(VendorcreateComponent, 
      new Vendor(),
      'Create Vendor List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Vendor>(VendordetailComponent,
      this.vendorData.find(each => each.Id == id),
      "Vendor Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Vendor>(VendorcreateComponent,
      this.vendorData.find(each => each.Id == id),
      "Vendor Edit");
  }
}
