import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MaterialSold } from './../../../entity/models/Material/material-sold';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MaterialSoldService {
  materialSold : MaterialSold[] = [];

  public getMaterialSoldList(): Observable < MaterialSold[] > {
      return this.http.get<MaterialSold[]>(AppSettings.API_ROOT+'material-sold')
  }
  public getMaterialSoldById(id : number): Observable < MaterialSold > {
      return this.http.get<MaterialSold>(AppSettings.API_ROOT+'material-sold/' + id)
  }
  public deleteMaterialSoldById(id : number): Observable < MaterialSold > {
      return this.http.delete<MaterialSold>(AppSettings.API_ROOT+'material-sold/' + id)
  }
  public addMaterialSold(entity : MaterialSold): Observable < MaterialSold > {
      return this.http.post<MaterialSold>(AppSettings.API_ROOT+'material-sold/', entity);
  }

  constructor(private http: HttpClient) { }
}
