import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  styleUrls: ['./employeepaymentlist.component.css'],
})
export class EmployeepaymentlistComponent implements OnInit {
  title: string = 'Employee Payment Lists';
  empPayment: EmployeePayment[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private employeePaymentService:EmployeePaymentService,
     private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.onGetEmployeesPayment();
    // this.onGetSingleEmployee(1);
    // this.onDeleteEmployee(2);
  }

  //function to get list of employees
  onGetEmployeesPayment(): any{
    this.employeePaymentService.getEmployeesPayment().subscribe(
      (response)=> response.map(response=>{
        return this.empPayment.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching employee payment list") 
    );
  }

  //function to get single employee by id
  onGetSingleEmployee(id:number): any{
    this.employeePaymentService.getEmployeePaymentById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single employee payment by id ')
    );
  }
  
  // function to delete employee
  onDeleteEmployee(id:number): any {  
    var ans = confirm("Do you want to delete customer with Id: " + id);  
    if (ans) {  
        this.employeePaymentService.deleteEmployeePaymentById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting employee payment')
        }, (error: any) => console.error(error))  
    } else return
    this.ngOnInit();
    this.cdr.detectChanges();
}  

//function for form popup
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<EmployeePayment>(EmployeepaymentcreateComponent, 
      new EmployeePayment(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<EmployeePayment>(EmployeepaymentdetailComponent,
      this.empPayment.find(x => x.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<EmployeePayment>(EmployeepaymentcreateComponent,
      this.empPayment.find(x => x.Id == id),
      "Employee Payment Edit");
  }
  //function for edit popup

}
