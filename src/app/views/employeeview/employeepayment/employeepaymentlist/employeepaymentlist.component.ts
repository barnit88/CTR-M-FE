import { Component, OnInit } from '@angular/core';
import { EmployeepaymentcreateComponent } from './../employeepaymentcreate/employeepaymentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { EmployeepaymentdetailComponent } from './../employeepaymentdetail/employeepaymentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { EmployeePayment } from './../../../../entity/models/Employees/employee-payment';
import { EmployeePaymentService } from './../../../../services/api-service/EmployeeService/employee-payment.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-employeepaymentlist',
  templateUrl: './employeepaymentlist.component.html',
  styleUrls: ['./employeepaymentlist.component.css']
})
export class EmployeepaymentlistComponent implements OnInit {
  title: string = 'Employee Payment Lists';
  empPayment: EmployeePayment[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService, private employeePaymentService:EmployeePaymentService) {}

  ngOnInit(): void {
    this.onGetEmployeePayment();
    // this.onGetSingleEmployee(1);
    // this.onDeleteEmployee(2);
  }

  //function to get list of employees
  onGetEmployeePayment(): any{
    this.employeePaymentService.getEmployeesPayment().subscribe(
      (response)=> response.map(response=>{
        return this.empPayment.push(response)
      }),
      (error)=> console.log(error),
      ()=> console.log("Done with fetching employee payment list") 
    );
  }

  //function to get single employee by id
  onGetSingleEmployee(id:number): any{
    this.employeePaymentService.getEmployeeById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single employee payment by id ')
    );
  }
  
  // function to delete employee
  onDeleteEmployee(id:number): any {  
    var ans = confirm("Do you want to delete customer with Id: " + id);  
    if (ans) {  
        this.employeePaymentService.deleteEmployeeById(id).subscribe((data) => {  
            this.onGetEmployeePayment();  
        }, error => console.error(error))  
    }  
}  

//function for form popup
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(EmployeepaymentcreateComponent, {
      title: 'Create Employee payment List',
    });
  }
  //function for details popup
  OpenDetailPopUp(eid: number) {
    this.genericDetailPopUpService.openDetailModal(EmployeepaymentdetailComponent,{
      title:" Employee Payment  Details",
      id: eid
    });
  }
  //function for edit popup

}
