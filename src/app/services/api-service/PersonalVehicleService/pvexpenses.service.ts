import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVExpenses } from './../../../entity/models/PersonalVehicle/pvexpenses';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PVExpensesService {

  pveExpense : PVExpenses[] = [];

  public getPVExpenseList(): Observable < PVExpenses[] > {
      return this.http.get<PVExpenses[]>(AppSettings.API_ROOT+'PVExpense')
  }
  public getPVExpensesById(id : number): Observable < PVExpenses > {
      return this.http.get<PVExpenses>(AppSettings.API_ROOT+'PVExpense/' + id)
  }
  public deletePVExpensesById(id : number): Observable < PVExpenses > {
      return this.http.delete<PVExpenses>(AppSettings.API_ROOT+'PVExpense/' + id)
  }
  public addPVExpenses(entity : PVExpenses): Observable < PVExpenses > {
      return this.http.post<PVExpenses>(AppSettings.API_ROOT+'PVExpense', entity);
  }
  public pveUpdate(id:number, entity: PVExpenses){
    return this.http.post(AppSettings.API_ROOT+'PVExpense/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
