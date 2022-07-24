import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVBought } from './../../../entity/models/PersonalVehicle/pvbought';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PVBoughtService {

  pvBought : PVBought[] = [];

  public getPVBoughtList(): Observable < PVBought[] > {
      return this.http.get<PVBought[]>(AppSettings.API_ROOT+'pv-bought')
  }
  public getPVBoughtById(id : number): Observable < PVBought > {
      return this.http.get<PVBought>(AppSettings.API_ROOT+'pv-bought/' + id)
  }
  public deletePVBoughtById(id : number): Observable < PVBought > {
      return this.http.delete<PVBought>(AppSettings.API_ROOT+'pv-bought/' + id)
  }
  public addPVBought(entity : PVBought): Observable < PVBought > {
      return this.http.post<PVBought>(AppSettings.API_ROOT+'pv-bought', entity);
  }

  constructor(private http: HttpClient) { }
}
