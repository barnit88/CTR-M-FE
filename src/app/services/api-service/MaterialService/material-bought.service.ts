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
      return this.http.get<MaterialBought[]>(AppSettings.API_ROOT+'MaterialBought');
  }
  public getMaterialBoughtById(id : number): Observable < MaterialBought > {
      return this.http.get<MaterialBought>(AppSettings.API_ROOT+'MaterialBought/' + id);
  }
  public deleteMaterialBoughtById(id : number): Observable < MaterialBought > {
      return this.http.delete<MaterialBought>(AppSettings.API_ROOT+'MaterialBought/' + id);
  }
  public addMaterialBought(entity : MaterialBought): Observable < MaterialBought > {
      return this.http.post<MaterialBought>(AppSettings.API_ROOT+'MaterialBought', entity);
  }
  public mbUpdate(id:number, entity: MaterialBought): any{
    return this.http.post(AppSettings.API_ROOT+'MaterialBought/'+id,entity);
  }

  constructor(private http:HttpClient) { }
}
