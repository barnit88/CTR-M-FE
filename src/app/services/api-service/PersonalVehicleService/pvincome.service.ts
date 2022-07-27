import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVIncome } from 'src/app/entity/models/PersonalVehicle/pvincome';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PVIncomeService {

  pviIncome : PVIncome[] = [];

  public getPVIncomeList(): Observable < PVIncome[] > {
      return this.http.get<PVIncome[]>(AppSettings.API_ROOT+'PVIncome')
  }
  public getPVIncomeById(id : number): Observable < PVIncome > {
      return this.http.get<PVIncome>(AppSettings.API_ROOT+'PVIncome/' + id)
  }
  public deletePVIncomeById(id : number): Observable < PVIncome > {
      return this.http.delete<PVIncome>(AppSettings.API_ROOT+'PVIncome/' + id)
  }
  public addPVIncome(entity : PVIncome): Observable < PVIncome > {
      return this.http.post<PVIncome>(AppSettings.API_ROOT+'PVIncome', entity);
  }
  public pviUpdate(id:number,entity:PVIncome): any{
    return this.http.post(AppSettings.API_ROOT+'PVIncome/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
