import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Material } from './../../../entity/models/Material/material';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  material : Material[] = [];

  public getMaterialList(): Observable < Material[] > {
      return this.http.get<Material[]>(AppSettings.API_ROOT+'material')
  }
  public getMaterialById(id : number): Observable < Material > {
      return this.http.get<Material>(AppSettings.API_ROOT+'material/' + id)
  }
  public deleteMaterialById(id : number): Observable < Material > {
      return this.http.delete<Material>(AppSettings.API_ROOT+'material/' + id)
  }
  public addMaterial(entity : Material): Observable < Material > {
      return this.http.post<Material>(AppSettings.API_ROOT+'material', entity);
  }

  constructor(private http: HttpClient) { }
}
