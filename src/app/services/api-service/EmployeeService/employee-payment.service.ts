import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {EmployeePayment} from 'src/app/entity/models/Employees/employee-payment';
import { AppSettings } from 'src/app/app.setting';

@Injectable({providedIn: 'root'})
export class EmployeePaymentService {

    employees : EmployeePayment[] = [];

    public getEmployeePaymentList(): Observable <EmployeePayment[]> {
        return this.http.get<EmployeePayment[]>(AppSettings.API_ROOT+'EmployeePayment');
    }
    public getEmployeePaymentById(id : number): Observable <EmployeePayment> {
        return this.http.get<EmployeePayment>(AppSettings.API_ROOT+'EmployeePayment/' + id);
    }
    public deleteEmployeePaymentById(id : number): Observable <any> {
        return this.http.delete<EmployeePayment>(AppSettings.API_ROOT+'EmployeePayment/' + id);
    }
    public addEmployeePayment(entity : EmployeePayment): Observable <any> {
        return this.http.post<EmployeePayment>(AppSettings.API_ROOT+'EmployeePayment', entity);
    }
    public updateEmployeePayment(id: number, entity: EmployeePayment): any{
        return this.http.post(AppSettings.API_ROOT+'EmployeePaymentTransaction/'+id, entity);
    }

    constructor(private http : HttpClient) {}
}

