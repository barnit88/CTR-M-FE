import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVEPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvepayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RVEPaymentTransactionService {
  rvePayment : RVEPaymentTransaction[] = [];

  public getRVExpensePaymentList(): Observable < RVEPaymentTransaction[] > {
      return this.http.get<RVEPaymentTransaction[]>(AppSettings.API_ROOT='rve-payment-transaction')
  }
  public getRVEPaymentTransactionById(id : number): Observable < RVEPaymentTransaction > {
      return this.http.get<RVEPaymentTransaction>(AppSettings.API_ROOT='rve-payment-transaction/' + id)
  }
  public deleteRVEPaymentTransactionById(id : number): Observable < RVEPaymentTransaction > {
      return this.http.delete<RVEPaymentTransaction>(AppSettings.API_ROOT='rve-payment-transaction/' + id)
  }
  public addRVEPaymentTransaction(entity : RVEPaymentTransaction): Observable < RVEPaymentTransaction > {
      return this.http.post<RVEPaymentTransaction>(AppSettings.API_ROOT='rve-payment-transaction/', entity);
  }

  constructor(private http: HttpClient) { }
}
