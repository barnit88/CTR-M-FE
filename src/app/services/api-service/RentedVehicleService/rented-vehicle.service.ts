import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RentedVehicle } from 'src/app/entity/models/RentedVehicle/rented-vehicle';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RentedVehicleService {
  rentedVehicle : RentedVehicle[] = [];

  public getRVList(): Observable < RentedVehicle[] > {
      return this.http.get<RentedVehicle[]>(AppSettings.API_ROOT+'rented-vehicle')
  }
  public getRentedVehicleById(id : number): Observable < RentedVehicle > {
      return this.http.get<RentedVehicle>(AppSettings.API_ROOT+'rented-vehicle/' + id)
  }
  public deleteRentedVehicleById(id : number): Observable < RentedVehicle > {
      return this.http.delete<RentedVehicle>(AppSettings.API_ROOT+'rented-vehicle/' + id)
  }
  public addRentedVehicle(entity : RentedVehicle): Observable < RentedVehicle > {
      return this.http.post<RentedVehicle>(AppSettings.API_ROOT+'rented-vehicle', entity);
  }

  constructor(private http: HttpClient) { }
}
