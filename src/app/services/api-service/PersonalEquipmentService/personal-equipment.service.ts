import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PersonalEquipment } from './../../../entity/models/PersonalEquipment/personal-equipment';

@Injectable({
  providedIn: 'root'
})
export class PersonalEquipmentService {

  personalEquipment : PersonalEquipment[] = [];

  public getPersonalEquipmentList(): Observable < PersonalEquipment[] > {
      return this.http.get<PersonalEquipment[]>('http://localhost:3000/employee-payment')
  }
  public getPersonalEquipmentById(id : number): Observable < PersonalEquipment > {
      return this.http.get<PersonalEquipment>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePersonalEquipmentById(id : number): Observable < PersonalEquipment > {
      return this.http.delete<PersonalEquipment>('http://localhost:3000/employee-payment/' + id)
  }
  public addPersonalEquipment(entity : PersonalEquipment): Observable < PersonalEquipment > {
      return this.http.post<PersonalEquipment>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
