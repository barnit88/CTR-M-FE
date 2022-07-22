import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RERent } from 'src/app/entity/models/RentedEquipment/rerent';

@Injectable({
  providedIn: 'root'
})
export class RERentService {

  reRent : RERent[] = [];

  public getRERentList(): Observable < RERent[] > {
      return this.http.get<RERent[]>('http://localhost:3000/employee-payment')
  }
  public getRERentById(id : number): Observable < RERent > {
      return this.http.get<RERent>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRERentById(id : number): Observable < RERent > {
      return this.http.delete<RERent>('http://localhost:3000/employee-payment/' + id)
  }
  public addRERent(entity : RERent): Observable < RERent > {
      return this.http.post<RERent>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
