import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from 'src/app/entity/models/Employees/employee';
import {Labour} from 'src/app/entity/models/Labour/labour';
import { AppSettings } from 'src/app/app.setting';

@Injectable({providedIn: 'root'})
export class LabourService {
  labour : Labour[] = [];

  public getLabourList(): Observable < Labour[] > {
      return this.http.get<Labour[]>(AppSettings.API_ROOT+'labour')
  }
  public getLabourById(id : number): Observable < Labour > {
      return this.http.get<Labour>(AppSettings.API_ROOT+'labour/' + id)
  }
  public deleteLabourById(id : number): Observable < Labour > {
      return this.http.delete<Labour>(AppSettings.API_ROOT+'labour/' + id)
  }
  public addLabour(entity : Labour): Observable < Labour > {
      return this.http.post<Labour>(AppSettings.API_ROOT+'labour', entity);
  }
  constructor(private http:HttpClient){}

}

