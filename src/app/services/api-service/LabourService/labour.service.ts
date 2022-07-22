import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from 'src/app/entity/models/Employees/employee';
import {Labour} from 'src/app/entity/models/Labour/labour';

@Injectable({providedIn: 'root'})
export class LabourService {
  labour : Labour[] = [];

  public getLabourList(): Observable < Labour[] > {
      return this.http.get<Labour[]>('http://localhost:3000/employee-payment')
  }
  public getLabourById(id : number): Observable < Labour > {
      return this.http.get<Labour>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteLabourById(id : number): Observable < Labour > {
      return this.http.delete<Labour>('http://localhost:3000/employee-payment/' + id)
  }
  public addLabour(entity : Labour): Observable < Labour > {
      return this.http.post<Labour>('http://localhost:3000/employee-payment/', entity);
  }
  constructor(private http:HttpClient){}

}

