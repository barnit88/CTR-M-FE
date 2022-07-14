import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup, FormControl} from '@angular/forms';
import { Employee } from './../../../../entity/models/Employees/employee';
@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {
  employee : Employee=new Employee();
  disabled: false;
    constructor(private formBuilder:FormBuilder) { }
 
    employeeForm = this.formBuilder.nonNullable.group({
    "firstName": ["", Validators.required],
    "middlename": ["", Validators.required],
    "lastname": ["", Validators.required],
    "state": ["", Validators.required],
    "district": ["", Validators.required],
    "munipality": ["", Validators.required],
    "contactNo": ["", Validators.required],
    "email": ["", Validators.required],
    "IdentityNo": ["", Validators.required],
    "identityType": ["", Validators.required],
    "employeeType": ["", Validators.required],
    "employeePayment": ["", Validators.required],
    "isActive": ["", Validators.required],
    "dateOfBirth": ["", Validators.required],
    "udf1":["", Validators.required],
    "udf2":["", Validators.required]
});
  ngOnInit(): void {
  }
  // js varibale 
  title:string="Create New Employee"
  onSubmitTemplateBased(form:any){
    console.log("reactive form submitted");
    console.log(form);
    
    console.log(form.firstName);
  }

}
