import { Component, OnInit } from '@angular/core';
import { EmployeecreateComponent } from './../employeecreate/employeecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { EmployeedetailComponent } from './../employeedetail/employeedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { EmployeeService } from 'src/app/services/api-service/EmployeeService/employee.service';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/entity/models/Employees/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  title: string = 'Employee Lists';
  employees: any;
  constructor(private employeeService:EmployeeService , private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void { 
    const employeesObservable = this.employeeService.getEmployee();
    employeesObservable.subscribe((employeeData: Employee) => {
      this.employees = employeeData;
  });
}
 
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
