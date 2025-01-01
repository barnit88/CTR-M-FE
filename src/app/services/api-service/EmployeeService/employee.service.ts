import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {AppSettings} from 'src/app/app.setting';
import {Employee} from 'src/app/entity/models/Employees/employee';
@Injectable({providedIn: 'root'})
export class EmployeeService {
    employees : Employee[] = [];
    employee : Employee;
    listChanged : Subject < Employee[] >;

    public getEmployeeList(): Observable < Employee[] > {
        return this.http.get<Employee[]>(AppSettings.API_ROOT+'Employee')
    }

    public addEmployee(entity : Employee): Observable < Employee > {
        return this.http.post<Employee>(AppSettings.API_ROOT+'Employee', entity);
    }

    public updateEmployeeRecord(id : number, entity : Employee): Observable < any > {
        return this.http.put(AppSettings.API_ROOT + 'Employee/'+ id, entity);
    }
    
    public deleteEmployeeRecord(id : number): Observable < Employee > {
        return this.http.delete<Employee>(AppSettings.API_ROOT+'Employee/' + id);
    }

    public getEmployeeById(id : number): Observable < Employee > {
        return this.http.get<Employee>(AppSettings.API_ROOT+'Employee/' + id);
    }

    public setEmployeeRecordById(id : number) {
        this.getEmployeeById(id).subscribe((response) => {
            this.employee = response;
        }, (error : any) => {
            console.log(error);
        });
    }

    setAllEmployeeRecords() {
        this.getEmployeeList().subscribe((response : any) => {
            this.employees = response;
            this.listChanged.next(this.employees.slice());
        }, (error) => {
            this.employees = [];
        });
    }

    constructor(private http : HttpClient) {}
}

