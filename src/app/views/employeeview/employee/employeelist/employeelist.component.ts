import { Component, OnInit } from '@angular/core';
import { EmployeecreateComponent } from './../employeecreate/employeecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { EmployeedetailComponent } from './../employeedetail/employeedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Employee Lists';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(EmployeecreateComponent, {
      title: 'Create Employee',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(EmployeedetailComponent,{
      title:" Employee  Details"
    });
  }

}
