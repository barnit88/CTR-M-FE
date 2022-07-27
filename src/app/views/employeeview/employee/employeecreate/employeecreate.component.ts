import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {Employee} from './../../../../entity/models/Employees/employee';
import {EmployeeService} from 'src/app/services/api-service/EmployeeService/employee.service';
import {BsModalRef} from 'ngx-bootstrap/modal';
import { EmployeeTitle } from 'src/app/entity/Enum/Enums';
@Component({selector: 'app-employeecreate', templateUrl: './employeecreate.component.html', styleUrls: ['./employeecreate.component.css']})
export class EmployeecreateComponent implements OnInit {
    data : Employee;
    title : EmployeeTitle.Create;

    constructor(
       private employeeService : EmployeeService,
        public modalRef : BsModalRef,
         private changeDetectorRef : ChangeDetectorRef,
         ) {}

    ngOnInit(): void {}
    
    public onSubmitTemplateBased(): void {
      console.log(this.data);
        if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
            this.addEmployee();
        } else {
            this.updateEmployee();
        }
        this.modalRef.hide();
    }

    private updateEmployee(): void {
        this.employeeService.updateEmployeeRecord(this.data.Id, this.data).subscribe(
          (data) => console.log('done updating employee'),
           (error) => console.log(error));
    }

    private addEmployee(): void {
        this.employeeService.addEmployee(this.data).subscribe(
          (data) => console.log('done creating new employee' + data),
           (error : any) => console.log(error));
    }

}

