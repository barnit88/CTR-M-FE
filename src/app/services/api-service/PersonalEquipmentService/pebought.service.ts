import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PEBought } from './../../../entity/models/PersonalEquipment/pebought';

@Injectable({
  providedIn: 'root'
})
export class PEBoughtService {
  peBought : PEBought[] = [];

  public getEmployeesPayment(): Observable < PEBought[] > {
      return this.http.get<PEBought[]>('http://localhost:3000/employee-payment')
  }
  public getPEBoughtById(id : number): Observable < PEBought > {
      return this.http.get<PEBought>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePEBoughtById(id : number): Observable < PEBought > {
      return this.http.delete<PEBought>('http://localhost:3000/employee-payment/' + id)
  }
  public addPEBought(entity : PEBought): Observable < PEBought > {
      return this.http.post<PEBought>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
