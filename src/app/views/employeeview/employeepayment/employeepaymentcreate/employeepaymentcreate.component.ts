import { Component, OnInit } from '@angular/core';
import { EmployeePayment } from './../../../../entity/models/Employees/employee-payment';

@Component({
  selector: 'app-employeepaymentcreate',
  templateUrl: './employeepaymentcreate.component.html',
  styleUrls: ['./employeepaymentcreate.component.css']
})
export class EmployeepaymentcreateComponent implements OnInit {
  employeePayment: EmployeePayment = new EmployeePayment();

  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New EC"

  submitEmployeePaymentForm(form:any){
    console.log("Employeepayment Submit Works");
    console.log(form);
  }


}
