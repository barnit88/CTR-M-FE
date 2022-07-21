import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RentedEquipment } from 'src/app/entity/models/RentedEquipment/rented-equipment';

@Injectable({
  providedIn: 'root'
})
export class RentedEquipmentService {
  rentedEquipment : RentedEquipment[] = [];

  public getEmployeesPayment(): Observable < RentedEquipment[] > {
      return this.http.get<RentedEquipment[]>('http://localhost:3000/employee-payment')
  }
  public getRentedEquipmentById(id : number): Observable < RentedEquipment > {
      return this.http.get<RentedEquipment>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRentedEquipmentById(id : number): Observable < RentedEquipment > {
      return this.http.delete<RentedEquipment>('http://localhost:3000/employee-payment/' + id)
  }
  public addRentedEquipment(entity : RentedEquipment): Observable < RentedEquipment > {
      return this.http.post<RentedEquipment>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
