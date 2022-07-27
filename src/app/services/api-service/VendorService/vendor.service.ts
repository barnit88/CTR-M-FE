import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Vendor } from 'src/app/entity/models/Vendor/vendor';
import { AppSettings } from 'src/app/app.setting';
import { idLocale } from 'ngx-bootstrap/chronos';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  vendor : Vendor[] = [];

  public getVendorList(): Observable < Vendor[] > {
      return this.http.get<Vendor[]>(AppSettings.API_ROOT+'Vendor')
  }
  public getVendorById(id : number): Observable < Vendor > {
      return this.http.get<Vendor>(AppSettings.API_ROOT+'Vendor/' + id)
  }
  public deleteVendorById(id : number): Observable < Vendor > {
      return this.http.delete<Vendor>(AppSettings.API_ROOT+'Vendor/' + id)
  }
  public addVendor(entity : Vendor): Observable < Vendor > {
      return this.http.post<Vendor>(AppSettings.API_ROOT+'Vendor', entity);
  }
  public updateVendor(id: number, entity: Vendor): any{
    return this.http.post(AppSettings.API_ROOT+'Vendor/'+ id, entity)
  }

  constructor(private http: HttpClient) { }
}
