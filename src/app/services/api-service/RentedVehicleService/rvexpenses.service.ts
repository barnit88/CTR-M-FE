import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVExpenses } from 'src/app/entity/models/RentedVehicle/rvexpenses';

@Injectable({
  providedIn: 'root'
})
export class RVExpensesService {

  rveExpense : RVExpenses[] = [];

  public getRVExpenseList(): Observable < RVExpenses[] > {
      return this.http.get<RVExpenses[]>('http://localhost:3000/employee-payment')
  }
  public getRVExpensesById(id : number): Observable < RVExpenses > {
      return this.http.get<RVExpenses>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRVExpensesById(id : number): Observable < RVExpenses > {
      return this.http.delete<RVExpenses>('http://localhost:3000/employee-payment/' + id)
  }
  public addRVExpenses(entity : RVExpenses): Observable < RVExpenses > {
      return this.http.post<RVExpenses>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
