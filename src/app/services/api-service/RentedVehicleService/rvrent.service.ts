import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVRent } from './../../../entity/models/RentedVehicle/rvrent';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RVRentService {

  rvRent : RVRent[] = [];

  public getRVRentList(): Observable < RVRent[] > {
      return this.http.get<RVRent[]>(AppSettings.API_ROOT+'rv-rent')
  }
  public getRVRentById(id : number): Observable < RVRent > {
      return this.http.get<RVRent>(AppSettings.API_ROOT+'rv-rent/' + id)
  }
  public deleteRVRentById(id : number): Observable < RVRent > {
      return this.http.delete<RVRent>(AppSettings.API_ROOT+'rv-rent/' + id)
  }
  public addRVRent(entity : RVRent): Observable < RVRent > {
      return this.http.post<RVRent>(AppSettings.API_ROOT+'rv-rent', entity);
  }

  constructor(private http: HttpClient) { }
}
