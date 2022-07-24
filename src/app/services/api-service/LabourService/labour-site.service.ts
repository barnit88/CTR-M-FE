import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LabourSite } from 'src/app/entity/models/Labour/labour-site';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class LabourSiteService {
  labourSite : LabourSite[] = [];

  public getLabourSiteList(): Observable < LabourSite[] > {
      return this.http.get<LabourSite[]>(AppSettings.API_ROOT+'labour-site')
  }
  public getLabourSiteById(id : number): Observable < LabourSite > {
      return this.http.get<LabourSite>(AppSettings.API_ROOT+'labour-site/' + id)
  }
  public deleteLabourSiteById(id : number): Observable < LabourSite > {
      return this.http.delete<LabourSite>(AppSettings.API_ROOT+'labour-site/' + id)
  }
  public addLabourSite(entity : LabourSite): Observable < LabourSite > {
      return this.http.post<LabourSite>(AppSettings.API_ROOT+'labour-site', entity);
  }

constructor(private http:HttpClient){}
}
