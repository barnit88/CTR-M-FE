import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVExpenses } from 'src/app/entity/models/RentedVehicle/rvexpenses';
import { AppSettings } from 'src/app/app.setting';
import { RVRent } from './../../../entity/models/RentedVehicle/rvrent';

@Injectable({
  providedIn: 'root'
})
export class RVExpensesService {

  rveExpense : RVExpenses[] = [];

  public getRVExpenseList(): Observable < RVExpenses[] > {
      return this.http.get<RVExpenses[]>(AppSettings.API_ROOT+'RVExpense')
  }
  public getRVExpensesById(id : number): Observable < RVExpenses > {
      return this.http.get<RVExpenses>(AppSettings.API_ROOT+'RVExpense/' + id)
  }
  public deleteRVExpensesById(id : number): Observable < RVExpenses > {
      return this.http.delete<RVExpenses>(AppSettings.API_ROOT+'RVExpense/' + id)
  }
  public addRVExpenses(entity : RVExpenses): Observable < RVExpenses > {
      return this.http.post<RVExpenses>(AppSettings.API_ROOT+'RVExpense/', entity);
  }
  public rveUpdate(id: number, entity: RVExpenses): any{
    return this. http.post(AppSettings.API_ROOT+'RVExpense/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
