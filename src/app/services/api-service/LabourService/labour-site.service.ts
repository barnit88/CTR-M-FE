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
      return this.http.get<LabourSite[]>(AppSettings.API_ROOT+'LabourSite')
  }
  public getLabourSiteById(id : number): Observable < LabourSite > {
      return this.http.get<LabourSite>(AppSettings.API_ROOT+'LabourSite/' + id)
  }
  public deleteLabourSiteById(id : number): Observable < LabourSite > {
      return this.http.delete<LabourSite>(AppSettings.API_ROOT+'LabourSite/' + id)
  }
  public addLabourSite(entity : LabourSite): Observable < LabourSite > {
      return this.http.post<LabourSite>(AppSettings.API_ROOT+'LabourSite', entity);
  }
  public lsUpdate(id: number, entity: LabourSite): any{
    return this.http.post(AppSettings.API_ROOT+'LabouSite/'+id, entity);
  }

constructor(private http:HttpClient){}
}
