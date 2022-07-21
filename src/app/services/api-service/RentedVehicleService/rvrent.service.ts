import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVRent } from './../../../entity/models/RentedVehicle/rvrent';

@Injectable({
  providedIn: 'root'
})
export class RVRentService {

  rvRent : RVRent[] = [];

  public getEmployeesPayment(): Observable < RVRent[] > {
      return this.http.get<RVRent[]>('http://localhost:3000/employee-payment')
  }
  public getRVRentById(id : number): Observable < RVRent > {
      return this.http.get<RVRent>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRVRentById(id : number): Observable < RVRent > {
      return this.http.delete<RVRent>('http://localhost:3000/employee-payment/' + id)
  }
  public addRVRent(entity : RVRent): Observable < RVRent > {
      return this.http.post<RVRent>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
