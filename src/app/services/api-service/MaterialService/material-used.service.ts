import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MaterialUsedService {
  materialUsed : MaterialUsed[] = [];

  public getMaterialUsedList(): Observable < MaterialUsed[] > {
      return this.http.get<MaterialUsed[]>(AppSettings.API_ROOT+'material-used')
  }
  public getMaterialUsedById(id : number): Observable < MaterialUsed > {
      return this.http.get<MaterialUsed>(AppSettings.API_ROOT+'material-used/' + id)
  }
  public deleteMaterialUsedById(id : number): Observable < MaterialUsed > {
      return this.http.delete<MaterialUsed>(AppSettings.API_ROOT+'material-used/' + id)
  }
  public addMaterialUsed(entity : MaterialUsed): Observable < MaterialUsed > {
      return this.http.post<MaterialUsed>(AppSettings.API_ROOT+'material-used', entity);
  }

  constructor(private http: HttpClient) { }
}
