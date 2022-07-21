import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MaterialBought } from 'src/app/entity/models/Material/material-bought';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MaterialBoughtService {
  materialBought : MaterialBought[] = [];

  public getEmployeesPayment(): Observable < MaterialBought[] > {
      return this.http.get<MaterialBought[]>('http://localhost:3000/employee-payment')
  }
  public getMaterialBoughtById(id : number): Observable < MaterialBought > {
      return this.http.get<MaterialBought>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMaterialBoughtById(id : number): Observable < MaterialBought > {
      return this.http.delete<MaterialBought>('http://localhost:3000/employee-payment/' + id)
  }
  public addMaterialBought(entity : MaterialBought): Observable < MaterialBought > {
      return this.http.post<MaterialBought>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http:HttpClient) { }
}
