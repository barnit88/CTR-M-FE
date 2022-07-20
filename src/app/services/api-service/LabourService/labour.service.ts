import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/entity/models/Employees/employee';
import { Labour } from 'src/app/entity/models/Labour/labour';

@Injectable({
  providedIn: 'root'
})
export class LabourService {
  employees: Labour[]=[];

  public getLabours(): Observable<Labour[]> {
    return this.http.get<Labour[]>('http://localhost:3000/employees')
}
  
constructor(private http:HttpClient){}
}
