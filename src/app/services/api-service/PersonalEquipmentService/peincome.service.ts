import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PEIncome } from 'src/app/entity/models/PersonalEquipment/peincome';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PEIncomeService {
  peIncome : PEIncome[] = [];

  public getPEIncomeList(): Observable < PEIncome[] > {
      return this.http.get<PEIncome[]>(AppSettings.API_ROOT+'PEIncome');
  }
  public getPEIncomeById(id : number): Observable < PEIncome > {
      return this.http.get<PEIncome>(AppSettings.API_ROOT+'PEIncome/' + id);
  }
  public deletePEIncomeById(id : number): Observable < PEIncome > {
      return this.http.delete<any>(AppSettings.API_ROOT+'PEIncome/' + id);
  }
  public addPEIncome(entity : PEIncome): Observable < PEIncome > {
      return this.http.post<PEIncome>(AppSettings.API_ROOT+'PEIncome', entity);
  }
  public peiUpdate(id: number, entity:PEIncome): any{
    return this.http.post(AppSettings.API_ROOT+'PEIncome/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
