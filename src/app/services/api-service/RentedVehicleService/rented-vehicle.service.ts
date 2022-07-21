import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RentedVehicle } from 'src/app/entity/models/RentedVehicle/rented-vehicle';

@Injectable({
  providedIn: 'root'
})
export class RentedVehicleService {
  rentedVehicle : RentedVehicle[] = [];

  public getEmployeesPayment(): Observable < RentedVehicle[] > {
      return this.http.get<RentedVehicle[]>('http://localhost:3000/employee-payment')
  }
  public getRentedVehicleById(id : number): Observable < RentedVehicle > {
      return this.http.get<RentedVehicle>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRentedVehicleById(id : number): Observable < RentedVehicle > {
      return this.http.delete<RentedVehicle>('http://localhost:3000/employee-payment/' + id)
  }
  public addRentedVehicle(entity : RentedVehicle): Observable < RentedVehicle > {
      return this.http.post<RentedVehicle>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
