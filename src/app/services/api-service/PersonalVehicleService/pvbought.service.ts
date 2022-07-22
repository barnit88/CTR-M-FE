import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVBought } from './../../../entity/models/PersonalVehicle/pvbought';

@Injectable({
  providedIn: 'root'
})
export class PVBoughtService {

  pvBought : PVBought[] = [];

  public getPVBoughtList(): Observable < PVBought[] > {
      return this.http.get<PVBought[]>('http://localhost:3000/employee-payment')
  }
  public getPVBoughtById(id : number): Observable < PVBought > {
      return this.http.get<PVBought>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePVBoughtById(id : number): Observable < PVBought > {
      return this.http.delete<PVBought>('http://localhost:3000/employee-payment/' + id)
  }
  public addPVBought(entity : PVBought): Observable < PVBought > {
      return this.http.post<PVBought>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
