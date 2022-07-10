import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourpaymentcreateComponent } from './../labourpaymentcreate/labourpaymentcreate.component';

@Component({
  selector: 'app-labourpaymentlist',
  templateUrl: './labourpaymentlist.component.html',
  styleUrls: ['./labourpaymentlist.component.css']
})
export class LabourpaymentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) { }

  ngOnInit(): void {
  }
  title: string='Labour Payment'
  OpenModalPopUp(){
    this.genericModalPopUpService.openDetailModal(LabourpaymentlistComponent, {
      title:" Create Labour Payment"
    })
  }
}
