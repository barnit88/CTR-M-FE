import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup, FormControl} from '@angular/forms';
import { Employee } from './../../../../entity/models/Employees/employee';
import { EmployeeService } from 'src/app/services/api-service/EmployeeService/employee.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {
  data : Employee;
    constructor(private formBuilder:FormBuilder, private employeeService:EmployeeService,public modalRef: BsModalRef, private changeDetectorRef:ChangeDetectorRef) { }
 
    employeeForm = this.formBuilder.nonNullable.group({
      "id":0,
    "FirstName": ["", Validators.required],
    "Middlename": ["", Validators.required],
    "Lastname": ["", Validators.required],
    "State": ["", Validators.required],
    "District": ["", Validators.required],
    "Munipality": ["", Validators.required],
    "ContactNo": ["", Validators.required],
    "Email": ["", Validators.required],
    "IdentityNo": ["", Validators.required],
    "IdentityType": ["", Validators.required],
    "EmployeeType": ["", Validators.required],
    "EmployeePayment": ["", Validators.required],
    "IsActive": ["", Validators.required],
    "DateOfBirth": ["", Validators.required],
    "UDF1":["", Validators.required],
    "UDF2":["", Validators.required]
});
  ngOnInit(): void {
  }
  // js varibale 
  title:string="Create New Employee"
  onSubmitTemplateBased(form:any){
  this.data = form
    this.employeeService.addEmployees(this.data).subscribe((data)=>
    console.log('done creating new employee'),
    (error: any)=> console.log(error)
    );
    this.changeDetectorRef.detectChanges();
    this.modalRef.hide();
    return;
  }

}
