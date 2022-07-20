import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LabourSite } from 'src/app/entity/models/Labour/labour-site';

@Injectable({
  providedIn: 'root'
})
export class LabourSiteService {
  employees: LabourSite[]=[];

  public getEmployees(): Observable<LabourSite[]> {
    return this.http.get<LabourSite[]>('http://localhost:3000/employees')
}
  
constructor(private http:HttpClient){}
}
