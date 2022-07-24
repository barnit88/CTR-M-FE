import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PersonalVehicle } from './../../../entity/models/PersonalVehicle/personal-vehicle';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PersonalVehicleService {

  personalVehicle : PersonalVehicle[] = [];

  public getPersonalVehicleList(): Observable < PersonalVehicle[] > {
      return this.http.get<PersonalVehicle[]>(AppSettings.API_ROOT+'personal-vehicle')
  }
  public getPersonalVehicleById(id : number): Observable < PersonalVehicle > {
      return this.http.get<PersonalVehicle>(AppSettings.API_ROOT+'personal-vehicle/' + id)
  }
  public deletePersonalVehicleById(id : number): Observable < PersonalVehicle > {
      return this.http.delete<PersonalVehicle>(AppSettings.API_ROOT+'personal-vehicle/' + id)
  }
  public addPersonalVehicle(entity : PersonalVehicle): Observable < PersonalVehicle > {
      return this.http.post<PersonalVehicle>(AppSettings.API_ROOT+'personal-vehicle', entity);
  }

  constructor(private http: HttpClient) { }
}
