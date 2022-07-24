import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/entity/models/User/user';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : User[] = [];

  public getUserList(): Observable < User[] > {
      return this.http.get<User[]>(AppSettings.API_ROOT+'user')
  }
  public getUserById(id : number): Observable < User > {
      return this.http.get<User>(AppSettings.API_ROOT+'user/' + id)
  }
  public deleteUserById(id : number): Observable < User > {
      return this.http.delete<User>(AppSettings.API_ROOT+'user/' + id)
  }
  public addUser(entity : User): Observable < User > {
      return this.http.post<User>(AppSettings.API_ROOT+'user', entity);
  }

  constructor(private http: HttpClient) { }
}
