import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REIncome } from 'src/app/entity/models/RentedEquipment/reincome';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class REIncomeService {
reIncome : REIncome[] = [];

  public getREIncomeList(): Observable < REIncome[] > {
      return this.http.get<REIncome[]>(AppSettings.API_ROOT+'re-income')
  }
  public getREIncomeById(id : number): Observable < REIncome > {
      return this.http.get<REIncome>(AppSettings.API_ROOT+'re-income/' + id)
  }
  public deleteREIncomeById(id : number): Observable < REIncome > {
      return this.http.delete<REIncome>(AppSettings.API_ROOT+'re-income/' + id)
  }
  public addREIncome(entity : REIncome): Observable < REIncome > {
      return this.http.post<REIncome>(AppSettings.API_ROOT+'re-income', entity);
  }

  constructor(private http: HttpClient) { }
}
