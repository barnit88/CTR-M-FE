import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PEIncomeService {
  peIncome : PEIncomeService[] = [];

  public getEmployeesPayment(): Observable < PEIncomeService[] > {
      return this.http.get<PEIncomeService[]>('http://localhost:3000/employee-payment')
  }
  public getPEIncomeServiceById(id : number): Observable < PEIncomeService > {
      return this.http.get<PEIncomeService>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePEIncomeServiceById(id : number): Observable < PEIncomeService > {
      return this.http.delete<PEIncomeService>('http://localhost:3000/employee-payment/' + id)
  }
  public addPEIncomeService(entity : PEIncomeService): Observable < PEIncomeService > {
      return this.http.post<PEIncomeService>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
