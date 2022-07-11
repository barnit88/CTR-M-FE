import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourpaymentcreateComponent } from './../labourpaymentcreate/labourpaymentcreate.component';
import { LabourpaymentdetailComponent } from './../labourpaymentdetail/labourpaymentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-labourpaymentlist',
  templateUrl: './labourpaymentlist.component.html',
  styleUrls: ['./labourpaymentlist.component.css']
})
export class LabourpaymentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) { }

  ngOnInit(): void {
  }
  title: string='Labour Payment'
  OpenModalPopUp(){
    this.genericModalPopUpService.openDetailModal(LabourpaymentcreateComponent, {
      title:" Create Labour Payment"
    })
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(LabourpaymentdetailComponent,{
      title:" Labour Payement Details"
    });
  }
}
