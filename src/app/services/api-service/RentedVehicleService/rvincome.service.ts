import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVIncome } from './../../../entity/models/RentedVehicle/rvincome';

@Injectable({
  providedIn: 'root'
})
export class RVIncomeService {
  rvIncome : RVIncome[] = [];

  public getEmployeesPayment(): Observable < RVIncome[] > {
      return this.http.get<RVIncome[]>('http://localhost:3000/employee-payment')
  }
  public getRVIncomeById(id : number): Observable < RVIncome > {
      return this.http.get<RVIncome>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRVIncomeById(id : number): Observable < RVIncome > {
      return this.http.delete<RVIncome>('http://localhost:3000/employee-payment/' + id)
  }
  public addRVIncome(entity : RVIncome): Observable < RVIncome > {
      return this.http.post<RVIncome>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
