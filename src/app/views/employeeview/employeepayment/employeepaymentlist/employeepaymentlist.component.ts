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
    
  }

  onGetEmployeesPayment(): any{
    this.employeePaymentService.getEmployeePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.empPayment.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching employee payment list") 
    );
    console.log(this.empPayment)
  }

  onGetSingleEmployee(id:number): any{
    this.employeePaymentService.getEmployeePaymentById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single employee payment by id ')
    );
  }
  
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


OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<EmployeePayment>(EmployeepaymentcreateComponent, 
      new EmployeePayment(),
      'Create Employee payment List',
    );
  }

  OpenDetailPopUp(id: number) {
    console.log(this.empPayment);
    let emp = this.empPayment.find(each=> each.Id == id)
    let data = this.empPayment.find(x => x.Id == id);
    console.log(data);
    console.log(emp);
    this.genericModalPopUpService.openModalPopUpService<EmployeePayment>(EmployeepaymentdetailComponent,
      data,
      "Employee Payment Details",
      id);
  }
   
  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<EmployeePayment>(EmployeepaymentcreateComponent,
      this.empPayment.find(x => x.Id == id)  ,
      "Employee Payment Edit",
      id);
  }

}
