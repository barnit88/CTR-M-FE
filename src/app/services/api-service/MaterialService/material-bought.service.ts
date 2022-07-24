import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaterialBought } from 'src/app/entity/models/Material/material-bought';
import { Observable } from 'rxjs/internal/Observable';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MaterialBoughtService {
  materialBought : MaterialBought[] = [];

  public getMaterialBoughtList(): Observable < MaterialBought[] > {
      return this.http.get<MaterialBought[]>(AppSettings.API_ROOT+'material-bought')
  }
  public getMaterialBoughtById(id : number): Observable < MaterialBought > {
      return this.http.get<MaterialBought>(AppSettings.API_ROOT+'material-bought/' + id)
  }
  public deleteMaterialBoughtById(id : number): Observable < MaterialBought > {
      return this.http.delete<MaterialBought>(AppSettings.API_ROOT+'material-bought/' + id)
  }
  public addMaterialBought(entity : MaterialBought): Observable < MaterialBought > {
      return this.http.post<MaterialBought>(AppSettings.API_ROOT+'material-bought', entity);
  }

  constructor(private http:HttpClient) { }
}
