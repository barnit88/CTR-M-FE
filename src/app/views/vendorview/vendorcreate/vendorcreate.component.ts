import { Component, OnInit } from '@angular/core';
import { Vendor } from './../../../entity/models/Vendor/vendor';
import { NgForm } from '@angular/forms';
import { VendorService } from './../../../services/api-service/VendorService/vendor.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { VendorTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-vendorcreate',
  templateUrl: './vendorcreate.component.html',
  styleUrls: ['./vendorcreate.component.css']
})
export class VendorcreateComponent implements OnInit {
  data:Vendor;
  title:VendorTitle.Create;

  constructor(private vendorService: VendorService,
    private modelRef: BsModalRef) { }

  ngOnInit(): void {
  }

public onVendorSubmit() : void {
    console.log(this.data);
    if (this.data.Id === undefined || this.data.Id === null, this.data.Id === 0) {
        this.AddVendor();
    } else {
        this.UpdateVendor();
    }
    this.modelRef.hide();
}

private AddVendor() : void {
    this.vendorService.addVendor(this.data).subscribe(
      (response) => console.log('done with adding' + response),
       (error) => console.log(error));
}

private UpdateVendor() : void {
    this.vendorService.updateVendor(this.data.Id, this.data).subscribe(
      (response: any) => console.log('done with update' + response),
       (error: any) => console.log(error));
}


}
