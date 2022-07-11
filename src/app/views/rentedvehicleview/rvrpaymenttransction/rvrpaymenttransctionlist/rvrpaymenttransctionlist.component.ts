import { Component, OnInit } from '@angular/core';
import { RvrpaymenttransctioncreateComponent } from './../rvrpaymenttransctioncreate/rvrpaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvrpaymenttransctiondetailComponent } from './../rvrpaymenttransctiondetail/rvrpaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rvrpaymenttransctionlist',
  templateUrl: './rvrpaymenttransctionlist.component.html',
  styleUrls: ['./rvrpaymenttransctionlist.component.css']
})
export class RvrpaymenttransctionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Rent Payment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvrpaymenttransctioncreateComponent, {
      title: 'Create New RVR payment',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RvrpaymenttransctiondetailComponent,{
      title:"Rented Vehicle Rent Payment details"
    });
  }
}
