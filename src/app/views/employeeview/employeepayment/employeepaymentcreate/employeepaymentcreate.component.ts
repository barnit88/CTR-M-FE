import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeePayment } from './../../../../entity/models/Employees/employee-payment';
import { EmployeePaymentService } from './../../../../services/api-service/EmployeeService/employee-payment.service';
import { EmployeeService } from 'src/app/services/api-service/EmployeeService/employee.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-employeepaymentcreate',
  templateUrl: './employeepaymentcreate.component.html',
  styleUrls: ['./employeepaymentcreate.component.css']
})
export class EmployeepaymentcreateComponent implements OnInit {
  employeePayment: EmployeePayment = new EmployeePayment();
  title:string="Create New EC"
  disabled: false;

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute, private employeePaymentService: EmployeePaymentService, private router:Router, private modelRef: BsModalRef ) {}

  ngOnInit(): void {
    
  }
  employeepaymentForm = this.formBuilder.nonNullable.group({
    "id": 0,
    "employeeId": ["", Validators.required],
    "employee": ["", Validators.required],
    "fromDate": ["", Validators.required],
    "toDate": ["", Validators.required],
    "paymentRate": ["", Validators.required],
    "period": ["", Validators.required],
    "payment": ["", Validators.required],
    "udf1":["", Validators.required],
    "udf2":["", Validators.required]
  });
  
  
  submitEmployeePaymentForm(form:any){
    console.log("Employeepayment Submit Works");
    console.log(form);
    this.employeePayment = form;
    this.employeePaymentService.addEmployeePayment(this.employeePayment).subscribe((response)=> console.log('done with adding employee payment'),
    (error)=> console.log(error)
    );
    this.modelRef.hide();

  }
  
}
