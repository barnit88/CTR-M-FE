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
      return this.http.get<MaterialUsed[]>(AppSettings.API_ROOT+'MaterialUsed')
  }
  public getMaterialUsedById(id : number): Observable < MaterialUsed > {
      return this.http.get<MaterialUsed>(AppSettings.API_ROOT+'MaterialUsed/' + id)
  }
  public deleteMaterialUsedById(id : number): Observable < MaterialUsed > {
      return this.http.delete<MaterialUsed>(AppSettings.API_ROOT+'MaterialUsed/' + id)
  }
  public addMaterialUsed(entity : MaterialUsed): Observable < MaterialUsed > {
      return this.http.post<MaterialUsed>(AppSettings.API_ROOT+'MaterialUsed', entity);
  }
  public muUpdate(id: number, entity: MaterialUsed): any{
    return this.http.post(AppSettings.API_ROOT+'MaterialUsed/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
