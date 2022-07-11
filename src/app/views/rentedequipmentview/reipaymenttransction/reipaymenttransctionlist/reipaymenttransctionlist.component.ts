import { Component, OnInit } from '@angular/core';
import { ReipaymenttransctioncreateComponent } from './../reipaymenttransctioncreate/reipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReipaymenttransctiondetailComponent } from './../reipaymenttransctiondetail/reipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-reipaymenttransctionlist',
  templateUrl: './reipaymenttransctionlist.component.html',
  styleUrls: ['./reipaymenttransctionlist.component.css']
})
export class ReipaymenttransctionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Income Payment Transaction';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ReipaymenttransctioncreateComponent, {
      title: 'Create New REI Payment',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ReipaymenttransctiondetailComponent,{
      title:"Rented Equipment Income Payment Details"
    });
  }

}
