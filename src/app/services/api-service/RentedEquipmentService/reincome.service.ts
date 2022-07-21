import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REIncome } from 'src/app/entity/models/RentedEquipment/reincome';

@Injectable({
  providedIn: 'root'
})
export class REIncomeService {
reIncome : REIncome[] = [];

  public getEmployeesPayment(): Observable < REIncome[] > {
      return this.http.get<REIncome[]>('http://localhost:3000/employee-payment')
  }
  public getREIncomeById(id : number): Observable < REIncome > {
      return this.http.get<REIncome>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteREIncomeById(id : number): Observable < REIncome > {
      return this.http.delete<REIncome>('http://localhost:3000/employee-payment/' + id)
  }
  public addREIncome(entity : REIncome): Observable < REIncome > {
      return this.http.post<REIncome>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
