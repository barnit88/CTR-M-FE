import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AppSettings } from 'src/app/app.setting';
import { Employee } from 'src/app/entity/models/Employees/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees: Employee[]=[
  {
       'FirstName': 'Nischal',
       'MiddleName': 'string',
       'LastName': 'string',
       'State': 'string',
       'District': 'string',
       'Muncipality': 'string',
       'ContactNo': 'string',
       'Email': 'nischalshrestha81@gmail.com',
       'IdentityType': 'string',
       'IdentityNo': 'string',
       'EmployeeType': 'string',
       'EmployeePaymentType': 'string',
       'isActive': true,
       'DateofBirth': new Date(),
       'UDF1': 'string',
       'UDF2': 'string',
    },
    {
      'FirstName': 'Baburam',
      'MiddleName': 'string',
      'LastName': 'string',
      'State': 'string',
      'District': 'string',
      'Muncipality': 'string',
      'ContactNo': 'string',
      'Email': 'babufuckinggoat@gmail.com',
      'IdentityType': 'string',
      'IdentityNo': 'string',
      'EmployeeType': 'string',
      'EmployeePaymentType': 'string',
      'isActive': true,
      'DateofBirth': new Date(),
      'UDF1': 'string',
      'UDF2': 'string',
   }]

    public getEmployee(): any {
      const employeeObservable = new Observable<Employee[]>(observer => {
             setTimeout(() => {
                 observer.next(this.employees);
             }, 1000);
      });
 
      return employeeObservable;
  }
    
  constructor(){}
}

