import { Component, OnInit } from '@angular/core';
import { RvipaymenttransctioncreateComponent } from './../rvipaymenttransctioncreate/rvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvipaymenttransctiondetailComponent } from './../rvipaymenttransctiondetail/rvipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rvipaymenttransctionlist',
  templateUrl: './rvipaymenttransctionlist.component.html',
  styleUrls: ['./rvipaymenttransctionlist.component.css']
})
export class RvipaymenttransctionlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Income PaymentList';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvipaymenttransctioncreateComponent, {
      title: 'Create New RVI PAyment',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RvipaymenttransctiondetailComponent,{
      title:"Rented Vehicle Income Payment details"
    });
  }
}
