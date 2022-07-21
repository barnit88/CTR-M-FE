import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialUsedService {
  materialUsed : MaterialUsed[] = [];

  public getEmployeesPayment(): Observable < MaterialUsed[] > {
      return this.http.get<MaterialUsed[]>('http://localhost:3000/employee-payment')
  }
  public getMaterialUsedById(id : number): Observable < MaterialUsed > {
      return this.http.get<MaterialUsed>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMaterialUsedById(id : number): Observable < MaterialUsed > {
      return this.http.delete<MaterialUsed>('http://localhost:3000/employee-payment/' + id)
  }
  public addMaterialUsed(entity : MaterialUsed): Observable < MaterialUsed > {
      return this.http.post<MaterialUsed>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
