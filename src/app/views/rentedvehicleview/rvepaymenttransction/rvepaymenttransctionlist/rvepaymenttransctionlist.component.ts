import { Component, OnInit } from '@angular/core';
import { RvepaymenttransctioncreateComponent } from './../rvepaymenttransctioncreate/rvepaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvepaymenttransctiondetailComponent } from './../rvepaymenttransctiondetail/rvepaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rvepaymenttransctionlist',
  templateUrl: './rvepaymenttransctionlist.component.html',
  styleUrls: ['./rvepaymenttransctionlist.component.css']
})
export class RvepaymenttransctionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvepaymenttransctioncreateComponent, {
      title: 'Create New RVE',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RvepaymenttransctiondetailComponent,{
      title:"Client details"
    });
  }
}
