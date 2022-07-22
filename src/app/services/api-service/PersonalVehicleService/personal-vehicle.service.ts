import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PersonalVehicle } from './../../../entity/models/PersonalVehicle/personal-vehicle';

@Injectable({
  providedIn: 'root'
})
export class PersonalVehicleService {

  personalVehicle : PersonalVehicle[] = [];

  public getPersonalVehicleList(): Observable < PersonalVehicle[] > {
      return this.http.get<PersonalVehicle[]>('http://localhost:3000/employee-payment')
  }
  public getPersonalVehicleById(id : number): Observable < PersonalVehicle > {
      return this.http.get<PersonalVehicle>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePersonalVehicleById(id : number): Observable < PersonalVehicle > {
      return this.http.delete<PersonalVehicle>('http://localhost:3000/employee-payment/' + id)
  }
  public addPersonalVehicle(entity : PersonalVehicle): Observable < PersonalVehicle > {
      return this.http.post<PersonalVehicle>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
