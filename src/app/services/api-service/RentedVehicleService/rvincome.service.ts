import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVIncome } from './../../../entity/models/RentedVehicle/rvincome';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RVIncomeService {
  rvIncome : RVIncome[] = [];

  public getRVIncomeList(): Observable < RVIncome[] > {
      return this.http.get<RVIncome[]>(AppSettings.API_ROOT+'rv-income')
  }
  public getRVIncomeById(id : number): Observable < RVIncome > {
      return this.http.get<RVIncome>(AppSettings.API_ROOT+'rv-income/' + id)
  }
  public deleteRVIncomeById(id : number): Observable < RVIncome > {
      return this.http.delete<RVIncome>(AppSettings.API_ROOT+'rv-income/' + id)
  }
  public addRVIncome(entity : RVIncome): Observable < RVIncome > {
      return this.http.post<RVIncome>(AppSettings.API_ROOT+'rv-income', entity);
  }

  constructor(private http: HttpClient) { }
}
