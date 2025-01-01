import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeePayment } from './../../../../entity/models/Employees/employee-payment';
import { EmployeePaymentService } from './../../../../services/api-service/EmployeeService/employee-payment.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Observer } from 'rxjs';
import { EmployeePaymentTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-employeepaymentcreate',
  templateUrl: './employeepaymentcreate.component.html',
  styleUrls: ['./employeepaymentcreate.component.css'],
})
export class EmployeepaymentcreateComponent implements OnInit {
  data: EmployeePayment;
  title:EmployeePaymentTitle.Create;
  

  constructor(
     private employeePaymentService: EmployeePaymentService,
       private modelRef: BsModalRef,
        private changeDetectorRef: ChangeDetectorRef ) {}

  ngOnInit(): void {}
  
  
  public onSubmitEmployeePayment(): void{
  if(this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
    this.AddEmployee();
  }else{
    this.UpdateEmployee();
  }
  this.modelRef.hide();
  }

  private AddEmployee(): void{
    this.employeePaymentService.addEmployeePayment(this.data).subscribe(
      (response)=> console.log('done with add'+ response),
      (error) => console.log(error)
    );
  }

  private UpdateEmployee(): void{
    this.employeePaymentService.updateEmployeePayment(this.data.Id, this.data).subscribe(
      (response: any)=> console.log('done with update'+ response),
      (error: any)=> console.log(error)
    )
  }
  
}
