import { Component, OnInit } from '@angular/core';
import { PebpaymenttransctioncreateComponent } from './../pebpaymenttransctioncreate/pebpaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PebpaymenttransctiondetailComponent } from './../pebpaymenttransctiondetail/pebpaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-pebpaymenttransctionlist',
  templateUrl: './pebpaymenttransctionlist.component.html',
  styleUrls: ['./pebpaymenttransctionlist.component.css']
})
export class PebpaymenttransctionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PebpaymenttransctioncreateComponent, {
      title: 'Create New PEB Payment',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PebpaymenttransctiondetailComponent,{
      title:" Personal Equipment Bought Payment Details"
    });
  }
}
