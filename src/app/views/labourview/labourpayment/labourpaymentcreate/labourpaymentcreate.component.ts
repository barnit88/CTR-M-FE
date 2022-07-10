import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-labourpaymentcreate',
  templateUrl: './labourpaymentcreate.component.html',
  styleUrls: ['./labourpaymentcreate.component.css']
})
export class LabourpaymentcreateComponent implements OnInit {

  constructor(private genericModalPopUpService:GenericModalPopUpService) { }

  ngOnInit(): void {
  }
  title:"Labour Payment List";

  OpenModelPopUp(){
    this.genericModalPopUpService.openDetailModal(LabourpaymentcreateComponent,{
      title:"Create Labour Payment"
    })
  }

}
