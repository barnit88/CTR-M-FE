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
      return this.http.get<User[]>(AppSettings.API_ROOT+'User')
  }
  public getUserById(id : number): Observable < User > {
      return this.http.get<User>(AppSettings.API_ROOT+'User/' + id)
  }
  public deleteUserById(id : number): Observable < User > {
      return this.http.delete<User>(AppSettings.API_ROOT+'User/' + id)
  }
  public addUser(entity : User): Observable < User > {
      return this.http.post<User>(AppSettings.API_ROOT+'User', entity);
  }
  public updateUser(id: number, entity: User): any {
    return this.http.post(AppSettings.API_ROOT+'User/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
