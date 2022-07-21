import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVExpenses } from './../../../entity/models/PersonalVehicle/pvexpenses';

@Injectable({
  providedIn: 'root'
})
export class PVExpensesService {

  pveExpense : PVExpenses[] = [];

  public getEmployeesPayment(): Observable < PVExpenses[] > {
      return this.http.get<PVExpenses[]>('http://localhost:3000/employee-payment')
  }
  public getPVExpensesById(id : number): Observable < PVExpenses > {
      return this.http.get<PVExpenses>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePVExpensesById(id : number): Observable < PVExpenses > {
      return this.http.delete<PVExpenses>('http://localhost:3000/employee-payment/' + id)
  }
  public addPVExpenses(entity : PVExpenses): Observable < PVExpenses > {
      return this.http.post<PVExpenses>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
