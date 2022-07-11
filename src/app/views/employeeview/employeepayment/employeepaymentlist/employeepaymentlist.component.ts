import { Component, OnInit } from '@angular/core';
import { EmployeepaymentcreateComponent } from './../employeepaymentcreate/employeepaymentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { EmployeepaymentdetailComponent } from './../employeepaymentdetail/employeepaymentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-employeepaymentlist',
  templateUrl: './employeepaymentlist.component.html',
  styleUrls: ['./employeepaymentlist.component.css']
})
export class EmployeepaymentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Employee Payment Lists';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(EmployeepaymentcreateComponent, {
      title: 'Create Employee payment List',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(EmployeepaymentdetailComponent,{
      title:" Employee Payment  Details"
    });
  }

}
