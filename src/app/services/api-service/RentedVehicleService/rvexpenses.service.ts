import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVExpenses } from 'src/app/entity/models/RentedVehicle/rvexpenses';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RVExpensesService {

  rveExpense : RVExpenses[] = [];

  public getRVExpenseList(): Observable < RVExpenses[] > {
      return this.http.get<RVExpenses[]>(AppSettings.API_ROOT+'rv-expense')
  }
  public getRVExpensesById(id : number): Observable < RVExpenses > {
      return this.http.get<RVExpenses>(AppSettings.API_ROOT+'rv-expense/' + id)
  }
  public deleteRVExpensesById(id : number): Observable < RVExpenses > {
      return this.http.delete<RVExpenses>(AppSettings.API_ROOT+'rv-expense/' + id)
  }
  public addRVExpenses(entity : RVExpenses): Observable < RVExpenses > {
      return this.http.post<RVExpenses>(AppSettings.API_ROOT+'rv-expense/', entity);
  }

  constructor(private http: HttpClient) { }
}
