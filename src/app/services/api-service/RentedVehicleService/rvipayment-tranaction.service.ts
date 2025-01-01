import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVIPaymentTransaction } from './../../../entity/models/RentedVehicle/rvipayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RVIPaymentTranactionService {

  rviPayment : RVIPaymentTransaction[] = [];

  public getRVIncomePaymentList(): Observable < RVIPaymentTransaction[] > {
      return this.http.get<RVIPaymentTransaction[]>(AppSettings.API_ROOT+'RVIPaymentTransaction')
  }
  public getRVIPaymentTransactionById(id : number): Observable < RVIPaymentTransaction > {
      return this.http.get<RVIPaymentTransaction>(AppSettings.API_ROOT+'RVIPaymentTransaction/' + id)
  }
  public deleteRVIPaymentTransactionById(id : number): Observable < RVIPaymentTransaction > {
      return this.http.delete<RVIPaymentTransaction>(AppSettings.API_ROOT+'RVIPaymentTransaction/' + id)
  }
  public addRVIPaymentTransaction(entity : RVIPaymentTransaction): Observable < RVIPaymentTransaction > {
      return this.http.post<RVIPaymentTransaction>(AppSettings.API_ROOT+'RVIPaymentTransaction', entity);
  }
  public rviPaymentUpdate(id: number, entity:RVIPaymentTransaction): any{
    return this.http.post(AppSettings.API_ROOT+'RVIPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
