import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RentedEquipment } from 'src/app/entity/models/RentedEquipment/rented-equipment';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RentedEquipmentService {
  rentedEquipment : RentedEquipment[] = [];

  public getREList(): Observable < RentedEquipment[] > {
      return this.http.get<RentedEquipment[]>(AppSettings.API_ROOT+'rented-equipment')
  }
  public getRentedEquipmentById(id : number): Observable < RentedEquipment > {
      return this.http.get<RentedEquipment>(AppSettings.API_ROOT+'rented-equipment/' + id)
  }
  public deleteRentedEquipmentById(id : number): Observable < RentedEquipment > {
      return this.http.delete<RentedEquipment>(AppSettings.API_ROOT+'rented-equipment/' + id)
  }
  public addRentedEquipment(entity : RentedEquipment): Observable < RentedEquipment > {
      return this.http.post<RentedEquipment>(AppSettings.API_ROOT+'rented-equipment', entity);
  }

  constructor(private http: HttpClient) { }
}
