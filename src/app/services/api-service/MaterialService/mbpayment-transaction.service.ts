import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { MBPaymentTransaction } from './../../../entity/models/Material/mbpayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MBPaymentTransactionService {
  mbPayment : MBPaymentTransaction[] = [];

  public getMBPaymentList(): Observable < MBPaymentTransaction[] > {
      return this.http.get<MBPaymentTransaction[]>(AppSettings.API_ROOT+'mb-payment-transaction')
  }
  public getMBPaymentTransactionById(id : number): Observable < MBPaymentTransaction > {
      return this.http.get<MBPaymentTransaction>(AppSettings.API_ROOT+'mb-payment-transaction/' + id)
  }
  public deleteMBPaymentTransactionById(id : number): Observable < MBPaymentTransaction > {
      return this.http.delete<MBPaymentTransaction>(AppSettings.API_ROOT+'mb-payment-transaction/' + id)
  }
  public addMBPaymentTransaction(entity : MBPaymentTransaction): Observable < MBPaymentTransaction > {
      return this.http.post<MBPaymentTransaction>(AppSettings.API_ROOT+'mb-payment-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
