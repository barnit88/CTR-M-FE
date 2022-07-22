import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppSettings } from 'src/app/app.setting';
import { Client } from 'src/app/entity/models/Client/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  startedEditing = new Subject<number>();
  listChanged = new Subject<Client[]>();

  Clients: Client[] = [];
  Client: Client;

  constructor(private http: HttpClient) {}
  add(entity: Client): Observable<any> {
    return this.http.post<Client>(AppSettings.API_ROOT + 'client', entity);
  }

  update(id: number, entity: Client): Observable<any> {
    // entity.Id = id;
    // entity.DateModified=new Date();
    // entity.LastModifiedBy=this.auth.getUserId;
    return this.http.put(AppSettings.API_ROOT + 'client' + '/' + id, entity);
  }
  delete(id: number): Observable<Client> {
    return this.http.delete<Client>(
      AppSettings.API_ROOT + 'client' + '/' + id
    );
  }

  getById(id: number): Observable<Client> {
    return this.http.get<Client>(AppSettings.API_ROOT + 'client' + '/' + id);
  }

  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(AppSettings.API_ROOT + 'client');
  }

  setById(id: number) {
    this.getById(id).subscribe(
      (data) => {
        this.Client = data;
      },
      (error) => {
        this.Client = {
          Id: null,
          FirstName: '',
          MiddleName: '',
          LastName: '',
          District: '',
          ClientCompanyContactNumber: '',
          ClientCompanyIdentityNumber: '',
          ClientCompanyIdentityType: '',
          ClientCompanyName: '',
          ClientType: '',
          ContactNo: '',
          DeletedBy: '',
          DeletedDate: null,
          IdentityNo: '',
          IdentityType: '',
          IsDeleted: false,
          Muncipality: '',
          UDF1: '',
          UDF2: '',
          State: '',
          Email: '',
          LastModifiedBy: '',
          DateModified: null,
          CreatedBy: '',
          DateCreated: null,
        };
      }
    );
  }

  setAll() {
    this.getAll().subscribe(
      (data) => {
        this.Clients = data;
        this.listChanged.next(this.Clients.slice());
      },
      (error) => {
        this.Clients = [];
      }
    );
  }
}
