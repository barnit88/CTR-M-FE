import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PEBought } from './../../../entity/models/PersonalEquipment/pebought';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PEBoughtService {
  peBought : PEBought[] = [];

  public getPEBoughtList(): Observable < PEBought[] > {
      return this.http.get<PEBought[]>(AppSettings.API_ROOT+'PEBought');
  }
  public getPEBoughtById(id : number): Observable < PEBought > {
      return this.http.get<PEBought>(AppSettings.API_ROOT+'PEBought/' + id);
  }
  public deletePEBoughtById(id : number): Observable < PEBought > {
      return this.http.delete<PEBought>(AppSettings.API_ROOT+'PEBought/' + id);
  }
  public addPEBought(entity : PEBought): Observable < PEBought > {
      return this.http.post<PEBought>(AppSettings.API_ROOT+'PEBought', entity);
  }

  public pebUpdate(id: number, entity: PEBought): any {
    return this.http.post(AppSettings.API_ROOT+'PEBought/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
