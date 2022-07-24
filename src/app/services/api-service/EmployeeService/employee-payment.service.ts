import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeePayment} from 'src/app/entity/models/Employees/employee-payment';
import { AppSettings } from 'src/app/app.setting';

@Injectable({providedIn: 'root'})
export class EmployeePaymentService {

    employees : EmployeePayment[] = [];

    public getEmployeePaymentList(): Observable <EmployeePayment[]> {
        return this.http.get<EmployeePayment[]>(AppSettings.API_ROOT+'employee-payment')
    }
    public getEmployeePaymentById(id : number): Observable <EmployeePayment> {
        return this.http.get<EmployeePayment>(AppSettings.API_ROOT+'employee-payment/' + id)
    }
    public deleteEmployeePaymentById(id : number): Observable <any> {
        return this.http.delete<EmployeePayment>(AppSettings.API_ROOT+'employee-payment/' + id)
    }
    public addEmployeePayment(entity : EmployeePayment): Observable <any> {
        return this.http.post<EmployeePayment>(AppSettings.API_ROOT+'employee-payment', entity);
    }

    constructor(private http : HttpClient) {}
}

