import { Component, OnInit } from '@angular/core';
import { EmployeePayment } from 'src/app/entity/models/Employees/employee-payment';

@Component({
  selector: 'app-employeepaymentdetail',
  templateUrl: './employeepaymentdetail.component.html',
  styleUrls: ['./employeepaymentdetail.component.css']
})
export class EmployeepaymentdetailComponent implements OnInit {
 title="Employee Payment Detail"
 data: EmployeePayment;
  constructor() { }

  ngOnInit(): void {
  }

}
