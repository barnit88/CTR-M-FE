import {ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {EmployeecreateComponent} from './../employeecreate/employeecreate.component';
import {GenericModalPopUpService} from 'src/app/services/common-service/generic.modal.popup.service';
import {EmployeedetailComponent} from './../employeedetail/employeedetail.component';
import {GenericDetailPopUpService} from 'src/app/services/common-service/generic.detail.popup.service';
import {EmployeeService} from 'src/app/services/api-service/EmployeeService/employee.service';
import {Observable, Subject} from 'rxjs';
import {Employee} from 'src/app/entity/models/Employees/employee';
import {Router} from '@angular/router';

@Component({selector: 'app-employeelist', templateUrl: './employeelist.component.html', styleUrls: ['./employeelist.component.css'], changeDetection: ChangeDetectionStrategy.OnPush})
export class EmployeelistComponent implements OnInit {
    title : string = 'Employee Lists';
    empList : Employee[] = [];

    constructor(private employeeService : EmployeeService, private changeDetectorRef : ChangeDetectorRef, private genericModalPopUpService : GenericModalPopUpService, private genericDetailPopUpService : GenericDetailPopUpService,) {}

    ngOnInit(): void {
        this.onGetEmployees();
    }

    onGetEmployees(): any {
        this.employeeService.getEmployeeList().subscribe((response) => response.map(res => {
            this.empList.push(res);
            this.changeDetectorRef.detectChanges();
            return true;
        }), (error : any) => console.log(error),);
        console.log(this.empList);
    }

    onGetSingleEmployee(id : number): any {
        this.employeeService.getEmployeeById(id).subscribe((response) => console.log(response), (error : any) => console.log(error), () => console.log('Done with getting single employee by Id '));
    }

    onDeleteEmployee(id : number): any {
        var ans = confirm("Do you want to delete employee with Id: " + id);
        if (ans) {
            this.employeeService.deleteEmployeeRecord(id).subscribe((data) => {
                console.log('done with deleting the employee')
                this.changeDetectorRef.detectChanges();
                return;
            }, error => console.error(error))
        }
        return true
    }

    OpenDetailPopUp(id : number) {
        this.genericModalPopUpService.openModalPopUpService<Employee>(EmployeedetailComponent, this.empList.find(x => x.Id == id), "Employee Detail");
    }

    OpenEditPopUp(id : number) {
        this.genericModalPopUpService.openModalPopUpService<Employee>(EmployeecreateComponent, this.empList.find(x => x.Id == id), "Employee Edit");
    }

    OpenCreatePopUp() {
      this.genericModalPopUpService.openModalPopUpService<Employee>(EmployeecreateComponent, 
        new Employee(), "Create Employee");
    }
}

