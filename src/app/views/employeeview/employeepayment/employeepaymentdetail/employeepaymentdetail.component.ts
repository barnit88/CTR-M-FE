import { Component, OnInit } from '@angular/core';
import { EmployeePayment } from 'src/app/entity/models/Employees/employee-payment';
import { EmployeePaymentService } from './../../../../services/api-service/EmployeeService/employee-payment.service';

@Component({
  selector: 'app-employeepaymentdetail',
  templateUrl: './employeepaymentdetail.component.html',
  styleUrls: ['./employeepaymentdetail.component.css']
})
export class EmployeepaymentdetailComponent implements OnInit {
  constructor(private employeePaymentService:EmployeePaymentService) { }
  title:string;
  data: EmployeePayment;
  id:number;
  ngOnInit(): void {
   console.log(this.title,this.data)
  }

}
