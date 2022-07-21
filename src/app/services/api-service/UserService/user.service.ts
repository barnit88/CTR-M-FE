import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/entity/models/User/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : User[] = [];

  public getEmployeesPayment(): Observable < User[] > {
      return this.http.get<User[]>('http://localhost:3000/employee-payment')
  }
  public getUserById(id : number): Observable < User > {
      return this.http.get<User>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteUserById(id : number): Observable < User > {
      return this.http.delete<User>('http://localhost:3000/employee-payment/' + id)
  }
  public addUser(entity : User): Observable < User > {
      return this.http.post<User>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
