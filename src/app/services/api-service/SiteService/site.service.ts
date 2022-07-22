import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Site } from 'src/app/entity/models/Site/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  site : Site[] = [];

  public getSiteList(): Observable < Site[] > {
      return this.http.get<Site[]>('http://localhost:3000/employee-payment')
  }
  public getSiteById(id : number): Observable < Site > {
      return this.http.get<Site>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteSiteById(id : number): Observable < Site > {
      return this.http.delete<Site>('http://localhost:3000/employee-payment/' + id)
  }
  public addSite(entity : Site): Observable < Site > {
      return this.http.post<Site>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
