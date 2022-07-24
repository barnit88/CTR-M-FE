import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PersonalEquipment } from './../../../entity/models/PersonalEquipment/personal-equipment';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PersonalEquipmentService {

  personalEquipment : PersonalEquipment[] = [];

  public getPersonalEquipmentList(): Observable < PersonalEquipment[] > {
      return this.http.get<PersonalEquipment[]>(AppSettings.API_ROOT+'personal-equipment')
  }
  public getPersonalEquipmentById(id : number): Observable < PersonalEquipment > {
      return this.http.get<PersonalEquipment>(AppSettings.API_ROOT+'personal-equipment/' + id)
  }
  public deletePersonalEquipmentById(id : number): Observable < PersonalEquipment > {
      return this.http.delete<PersonalEquipment>(AppSettings.API_ROOT+'personal-equipment/' + id)
  }
  public addPersonalEquipment(entity : PersonalEquipment): Observable < PersonalEquipment > {
      return this.http.post<PersonalEquipment>(AppSettings.API_ROOT+'personal-equipment', entity);
  }

  constructor(private http: HttpClient) { }
}
