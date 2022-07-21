import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVIncome } from 'src/app/entity/models/PersonalVehicle/pvincome';

@Injectable({
  providedIn: 'root'
})
export class PVIncomeService {

  pviIncome : PVIncome[] = [];

  public getEmployeesPayment(): Observable < PVIncome[] > {
      return this.http.get<PVIncome[]>('http://localhost:3000/employee-payment')
  }
  public getPVIncomeById(id : number): Observable < PVIncome > {
      return this.http.get<PVIncome>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePVIncomeById(id : number): Observable < PVIncome > {
      return this.http.delete<PVIncome>('http://localhost:3000/employee-payment/' + id)
  }
  public addPVIncome(entity : PVIncome): Observable < PVIncome > {
      return this.http.post<PVIncome>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
