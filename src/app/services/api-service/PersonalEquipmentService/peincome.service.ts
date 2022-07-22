import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PEIncome } from 'src/app/entity/models/PersonalEquipment/peincome';

@Injectable({
  providedIn: 'root'
})
export class PEIncomeService {
  peIncome : PEIncome[] = [];

  public getPEIncomeList(): Observable < PEIncome[] > {
      return this.http.get<PEIncome[]>('http://localhost:3000/employee-payment')
  }
  public getPEIncomeById(id : number): Observable < PEIncome > {
      return this.http.get<PEIncome>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePEIncomeById(id : number): Observable < PEIncome > {
      return this.http.delete<any>('http://localhost:3000/employee-payment/' + id)
  }
  public addPEIncome(entity : PEIncome): Observable < PEIncome > {
      return this.http.post<PEIncome>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
