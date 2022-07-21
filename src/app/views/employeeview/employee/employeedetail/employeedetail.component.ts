import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from './../../../../services/api-service/EmployeeService/employee.service';
import { Employee } from './../../../../entity/models/Employees/employee';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  data: Employee;
  title="Empolyee Detail"
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    // this.employeeService.getEmployeeById(this.id).subscribe(
    //   (response)=> this.details.push(response),
    //   (error)=> console.log(error),
    //   ()=> console.log('Done with getting employee details')
    // );
  }


}

