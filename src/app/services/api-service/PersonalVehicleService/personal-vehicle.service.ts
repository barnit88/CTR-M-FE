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
      return this.http.get<PersonalVehicle[]>(AppSettings.API_ROOT+'PersonalVehicle')
  }
  public getPersonalVehicleById(id : number): Observable < PersonalVehicle > {
      return this.http.get<PersonalVehicle>(AppSettings.API_ROOT+'PersonalVehicle/' + id)
  }
  public deletePersonalVehicleById(id : number): Observable < PersonalVehicle > {
      return this.http.delete<PersonalVehicle>(AppSettings.API_ROOT+'PersonalVehicle/' + id)
  }
  public addPersonalVehicle(entity : PersonalVehicle): Observable < PersonalVehicle > {
      return this.http.post<PersonalVehicle>(AppSettings.API_ROOT+'PersonalVehicle', entity);
  }
  public pvUpdate(id:number, entity: PersonalVehicle): any{
    return this.http.post(AppSettings.API_ROOT+'PersonalVehicle/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
