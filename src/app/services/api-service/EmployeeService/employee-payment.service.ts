import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeePayment} from 'src/app/entity/models/Employees/employee-payment';

@Injectable({providedIn: 'root'})
export class EmployeePaymentService {

    employees : EmployeePayment[] = [];

    public getEmployeesPayment(): Observable < EmployeePayment[] > {
        return this.http.get<EmployeePayment[]>('http://localhost:3000/employee-payment')
    }
    public getEmployeePaymentById(id : number): Observable < EmployeePayment > {
        return this.http.get<EmployeePayment>('http://localhost:3000/employee-payment/' + id)
    }
    public deleteEmployeePaymentById(id : number): Observable < EmployeePayment > {
        return this.http.delete<EmployeePayment>('http://localhost:3000/employee-payment/' + id)
    }
    public addEmployeePayment(entity : EmployeePayment): Observable < EmployeePayment > {
        return this.http.post<EmployeePayment>('http://localhost:3000/employee-payment/', entity);
    }

    constructor(private http : HttpClient) {}
}

