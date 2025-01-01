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
      return this.http.get<MaterialStock[]>(AppSettings.API_ROOT+'MaterialStock');
  }
  public getMaterialStockById(id : number): Observable < MaterialStock > {
      return this.http.get<MaterialStock>(AppSettings.API_ROOT+'MaterialStock/' + id);
  }
  public deleteMaterialStockById(id : number): Observable < MaterialStock > {
      return this.http.delete<MaterialStock>(AppSettings.API_ROOT+'MaterialStock/' + id);
  }
  public addMaterialStock(entity : MaterialStock): Observable < MaterialStock > {
      return this.http.post<MaterialStock>(AppSettings.API_ROOT+'MaterialStock/', entity);
  }
  public mstockUpdate(id: number, entity: MaterialStock): any{
    return this.http.post(AppSettings.API_ROOT+'MaterialStock/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
