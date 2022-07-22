import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Material } from './../../../entity/models/Material/material';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  material : Material[] = [];

  public getMaterialList(): Observable < Material[] > {
      return this.http.get<Material[]>('http://localhost:3000/employee-payment')
  }
  public getMaterialById(id : number): Observable < Material > {
      return this.http.get<Material>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMaterialById(id : number): Observable < Material > {
      return this.http.delete<Material>('http://localhost:3000/employee-payment/' + id)
  }
  public addMaterial(entity : Material): Observable < Material > {
      return this.http.post<Material>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
