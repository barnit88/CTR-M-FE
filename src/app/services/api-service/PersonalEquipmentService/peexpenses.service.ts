import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {PEExpenses} from './../../../entity/models/PersonalEquipment/peexpenses';

@Injectable({providedIn: 'root'})
export class PEExpensesService {
    peeExpense : PEExpenses[] = [];

    public getEmployeesPayment(): Observable < PEExpenses[] > {
        return this.http.get<PEExpenses[]>('http://localhost:3000/employee-payment')
    }
    public getPEExpensesById(id : number): Observable < PEExpenses > {
        return this.http.get<PEExpenses>('http://localhost:3000/employee-payment/' + id)
    }
    public deletePEExpensesById(id : number): Observable < PEExpenses > {
        return this.http.delete<PEExpenses>('http://localhost:3000/employee-payment/' + id)
    }
    public addPEExpenses(entity : PEExpenses): Observable < PEExpenses > {
        return this.http.post<PEExpenses>('http://localhost:3000/employee-payment/', entity);
    }

    constructor(private http : HttpClient) {}
}

