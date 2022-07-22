import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LabourSite } from 'src/app/entity/models/Labour/labour-site';

@Injectable({
  providedIn: 'root'
})
export class LabourSiteService {
  labourSite : LabourSite[] = [];

  public getLabourSiteList(): Observable < LabourSite[] > {
      return this.http.get<LabourSite[]>('http://localhost:3000/employee-payment')
  }
  public getLabourSiteById(id : number): Observable < LabourSite > {
      return this.http.get<LabourSite>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteLabourSiteById(id : number): Observable < LabourSite > {
      return this.http.delete<LabourSite>('http://localhost:3000/employee-payment/' + id)
  }
  public addLabourSite(entity : LabourSite): Observable < LabourSite > {
      return this.http.post<LabourSite>('http://localhost:3000/employee-payment/', entity);
  }

constructor(private http:HttpClient){}
}
