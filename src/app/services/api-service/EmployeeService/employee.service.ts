import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AppSettings } from 'src/app/app.setting';
import { Client } from 'src/app/entity/models/Client/client';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  startedEditing = new Subject<number>();
  listChanged = new Subject<Client>();
  
  constructor(private http:HttpClient) { }
  add(entity:Client):Observable<Client>{
return this.http.post<Client>(AppSettings.API_ROOT+'Employee',entity);
  }

}
