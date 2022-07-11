import { Component, OnInit } from '@angular/core';
import { RerentcreateComponent } from './../rerentcreate/rerentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RerentdetailComponent } from './../rerentdetail/rerentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rerentlist',
  templateUrl: './rerentlist.component.html',
  styleUrls: ['./rerentlist.component.css']
})
export class RerentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Rent List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RerentcreateComponent, {
      title: 'Rented Equipment Create',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RerentdetailComponent,{
      title:"Rented Equipment Rent details"
    });
  }

}
