import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Site } from 'src/app/entity/models/Site/site';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  site : Site[] = [];

  public getSiteList(): Observable < Site[] > {
      return this.http.get<Site[]>(AppSettings.API_ROOT+'Site')
  }
  public getSiteById(id : number): Observable < Site > {
      return this.http.get<Site>(AppSettings.API_ROOT+'Site/' + id)
  }
  public deleteSiteById(id : number): Observable < Site > {
      return this.http.delete<Site>(AppSettings.API_ROOT+'Site/' + id)
  }
  public addSite(entity : Site): Observable < Site > {
      return this.http.post<Site>(AppSettings.API_ROOT+'Site', entity);
  }
  public updateSite(id:number, entity:Site): any{
    return this.http.post(AppSettings.API_ROOT+'Site/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
