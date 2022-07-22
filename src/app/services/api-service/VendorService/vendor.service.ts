import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vendor } from 'src/app/entity/models/Vendor/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendor : Vendor[] = [];

  public getVendorList(): Observable < Vendor[] > {
      return this.http.get<Vendor[]>('http://localhost:3000/employee-payment')
  }
  public getVendorById(id : number): Observable < Vendor > {
      return this.http.get<Vendor>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteVendorById(id : number): Observable < Vendor > {
      return this.http.delete<Vendor>('http://localhost:3000/employee-payment/' + id)
  }
  public addVendor(entity : Vendor): Observable < Vendor > {
      return this.http.post<Vendor>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
