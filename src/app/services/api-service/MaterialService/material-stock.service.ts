import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MaterialStock } from './../../../entity/models/Material/material-stock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialStockService {
  materialStock : MaterialStock[] = [];

  public getEmployeesPayment(): Observable < MaterialStock[] > {
      return this.http.get<MaterialStock[]>('http://localhost:3000/employee-payment')
  }
  public getMaterialStockById(id : number): Observable < MaterialStock > {
      return this.http.get<MaterialStock>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMaterialStockById(id : number): Observable < MaterialStock > {
      return this.http.delete<MaterialStock>('http://localhost:3000/employee-payment/' + id)
  }
  public addMaterialStock(entity : MaterialStock): Observable < MaterialStock > {
      return this.http.post<MaterialStock>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
