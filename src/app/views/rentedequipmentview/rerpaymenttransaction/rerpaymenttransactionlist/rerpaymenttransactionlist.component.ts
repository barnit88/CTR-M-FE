import { Component, OnInit } from '@angular/core';
import { RerpaymenttransactioncreateComponent } from './../rerpaymenttransactioncreate/rerpaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RerpaymenttransactiondetailComponent } from './../rerpaymenttransactiondetail/rerpaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-rerpaymenttransactionlist',
  templateUrl: './rerpaymenttransactionlist.component.html',
  styleUrls: ['./rerpaymenttransactionlist.component.css']
})
export class RerpaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Rent Payment Transaction List';

  OpenModalPopUp() {
    // this.genericModalPopUpService.openModalPopUpService(RerpaymenttransactioncreateComponent, {
    //   title: 'Create New RER Payment',
    // });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(RerpaymenttransactiondetailComponent,{
      title:"Rented Equipment Rent Payment details"
    });
  }

}
