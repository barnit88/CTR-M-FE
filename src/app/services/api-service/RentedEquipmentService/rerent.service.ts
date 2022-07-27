import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RERent } from 'src/app/entity/models/RentedEquipment/rerent';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RERentService {

  reRent : RERent[] = [];

  public getRERentList(): Observable < RERent[] > {
      return this.http.get<RERent[]>(AppSettings.API_ROOT+'RERent')
  }
  public getRERentById(id : number): Observable < RERent > {
      return this.http.get<RERent>(AppSettings.API_ROOT+'RERent/' + id)
  }
  public deleteRERentById(id : number): Observable < RERent > {
      return this.http.delete<RERent>(AppSettings.API_ROOT+'RERent/' + id)
  }
  public addRERent(entity : RERent): Observable < RERent > {
      return this.http.post<RERent>(AppSettings.API_ROOT+'RERent', entity);
  }
  public rerUpdate(id: number, entity: RERent): any{
    return this.http.post(AppSettings.API_ROOT+'RVRent/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
