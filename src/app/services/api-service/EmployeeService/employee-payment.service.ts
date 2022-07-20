import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeePayment } from 'src/app/entity/models/Employees/employee-payment';

@Injectable({
  providedIn: 'root'
})
export class EmployeePaymentService {

  employees: EmployeePayment[]=[];

  public getEmployeesPayment(): Observable<EmployeePayment[]> {
    return this.http.get<EmployeePayment[]>('http://localhost:3000/employees-payment')
}
  public getEmployeeById(id:number): Observable<EmployeePayment>{
    return this.http.get<EmployeePayment>('http://localhost:3000/employees-payment/'+id)
  }
  public deleteEmployeeById(id: number): Observable<EmployeePayment>{
    return this.http.delete<EmployeePayment>('http://localhost:3000/employees-payment/'+id)
  }
  public addEmployeePayment(entity:EmployeePayment ): Observable<EmployeePayment> {
    return this.http.post<EmployeePayment>('http://localhost:3000/employees-payment/', entity);
  }
  
constructor(private http:HttpClient){}
}
