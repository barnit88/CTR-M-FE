import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MaterialStock } from './../../../entity/models/Material/material-stock';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MaterialStockService {
  materialStock : MaterialStock[] = [];

  public getMaterialStockList(): Observable < MaterialStock[] > {
      return this.http.get<MaterialStock[]>(AppSettings.API_ROOT+'material-stock')
  }
  public getMaterialStockById(id : number): Observable < MaterialStock > {
      return this.http.get<MaterialStock>(AppSettings.API_ROOT+'material-stock/' + id)
  }
  public deleteMaterialStockById(id : number): Observable < MaterialStock > {
      return this.http.delete<MaterialStock>(AppSettings.API_ROOT+'material-stock/' + id)
  }
  public addMaterialStock(entity : MaterialStock): Observable < MaterialStock > {
      return this.http.post<MaterialStock>(AppSettings.API_ROOT+'material-stock/', entity);
  }

  constructor(private http: HttpClient) { }
}
