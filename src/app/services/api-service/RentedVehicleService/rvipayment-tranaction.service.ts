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
      return this.http.get<RVIPaymentTransaction[]>(AppSettings.API_ROOT+'rvi-payment-transaction')
  }
  public getRVIPaymentTransactionById(id : number): Observable < RVIPaymentTransaction > {
      return this.http.get<RVIPaymentTransaction>(AppSettings.API_ROOT+'rvi-payment-transaction/' + id)
  }
  public deleteRVIPaymentTransactionById(id : number): Observable < RVIPaymentTransaction > {
      return this.http.delete<RVIPaymentTransaction>(AppSettings.API_ROOT+'rvi-payment-transaction/' + id)
  }
  public addRVIPaymentTransaction(entity : RVIPaymentTransaction): Observable < RVIPaymentTransaction > {
      return this.http.post<RVIPaymentTransaction>(AppSettings.API_ROOT+'rvi-payment-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
