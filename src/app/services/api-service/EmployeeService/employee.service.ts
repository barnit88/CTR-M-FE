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
        return this.http.get<Employee[]>('http://localhost:3000/employees')
    }

    public addEmployees(entity : Employee): Observable < Employee > {
        return this.http.post<Employee>('http://localhost:3000/employees', entity);
    }

    public updateEmployeeRecords(id : number, entity : Employee): Observable < any > {

        return this.http.put('http://localhost:3000' + 'Employee' + '/' + id, entity);
    }
    
    public deleteEmployeeRecord(id : number): Observable < Employee > {
        return this.http.delete<Employee>('http://localhost:3000/employees/' + id);
    }

    public getEmployeeById(id : number): Observable < Employee > {
        return this.http.get<Employee>('http://localhost:3000/employees/' + id);
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

