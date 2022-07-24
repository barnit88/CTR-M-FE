import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {PEExpenses} from './../../../entity/models/PersonalEquipment/peexpenses';
import { AppSettings } from 'src/app/app.setting';

@Injectable({providedIn: 'root'})
export class PEExpensesService {
    peeExpense : PEExpenses[] = [];

    public getPEExpenseList(): Observable < PEExpenses[] > {
        return this.http.get<PEExpenses[]>(AppSettings.API_ROOT+'pe-expense')
    }
    public getPEExpensesById(id : number): Observable < PEExpenses > {
        return this.http.get<PEExpenses>(AppSettings.API_ROOT+'pe-expense/' + id)
    }
    public deletePEExpensesById(id : number): Observable < PEExpenses > {
        return this.http.delete<PEExpenses>(AppSettings.API_ROOT+'pe-expense/' + id)
    }
    public addPEExpenses(entity : PEExpenses): Observable < PEExpenses > {
        return this.http.post<PEExpenses>(AppSettings.API_ROOT+'pe-expense', entity);
    }

    constructor(private http : HttpClient) {}
}

