import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MaterialSold } from './../../../entity/models/Material/material-sold';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialSoldService {
  materialSold : MaterialSold[] = [];

  public getMaterialSoldList(): Observable < MaterialSold[] > {
      return this.http.get<MaterialSold[]>('http://localhost:3000/employee-payment')
  }
  public getMaterialSoldById(id : number): Observable < MaterialSold > {
      return this.http.get<MaterialSold>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMaterialSoldById(id : number): Observable < MaterialSold > {
      return this.http.delete<MaterialSold>('http://localhost:3000/employee-payment/' + id)
  }
  public addMaterialSold(entity : MaterialSold): Observable < MaterialSold > {
      return this.http.post<MaterialSold>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
