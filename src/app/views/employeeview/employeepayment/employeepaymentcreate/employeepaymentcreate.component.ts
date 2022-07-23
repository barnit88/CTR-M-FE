import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeePayment } from './../../../../entity/models/Employees/employee-payment';
import { EmployeePaymentService } from './../../../../services/api-service/EmployeeService/employee-payment.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-employeepaymentcreate',
  templateUrl: './employeepaymentcreate.component.html',
  styleUrls: ['./employeepaymentcreate.component.css'],
})
export class EmployeepaymentcreateComponent implements OnInit {
  data: EmployeePayment = new EmployeePayment();
  title:string="Create New EC"
  employeepaymentvalid: FormGroup;

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
     private employeePaymentService: EmployeePaymentService,
      private router:Router,
       private modelRef: BsModalRef,
        private changeDetectorRef: ChangeDetectorRef ) {}

  ngOnInit(): void {

    this.employeepaymentvalid = this.formBuilder.nonNullable.group({
      "id":0,
      "EmployeeId": ["", Validators.required],
      "Employee": ["", Validators.required],
      "FromDate": ["", Validators.required],
      "ToDate": ["", Validators.required],
      "PaymentRate": ["", Validators.required],
      "Period": ["", Validators.required],
      "Payment": ["", Validators.required],
      "UDF1":["", Validators.required],
      "UDF2":["", Validators.required]
    });
    console.log(this.data)
  }
  
  
  submitEmployeePaymentForm(form:any): any{
    console.log("Employeepayment Submit Works");
    console.log(form);
    this.data = form;
    console.log(this.data)
    this.employeePaymentService.addEmployeePayment(this.data).subscribe((response)=>
    console.log(response),
    (error:any)=> console.log(error),
    ()=> console.log('Done with creating new employee payment')
    );
    this.employeePaymentService.getEmployeePaymentList();
    this.modelRef.hide();
  }
  
}
