import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PEEPaymentTransaction } from './../../../entity/models/PersonalEquipment/peepayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PEEPaymentTransactionService {
  peePayment : PEEPaymentTransaction[] = [];

  public getPEExpensePaymentList(): Observable < PEEPaymentTransaction[] > {
      return this.http.get<PEEPaymentTransaction[]>(AppSettings.API_ROOT+'pee-payment-transaction')
  }
  public getPEEPaymentTransactionById(id : number): Observable < PEEPaymentTransaction > {
      return this.http.get<PEEPaymentTransaction>(AppSettings.API_ROOT+'pee-payment-transaction/' + id)
  }
  public deletePEEPaymentTransactionById(id : number): Observable < PEEPaymentTransaction > {
      return this.http.delete<PEEPaymentTransaction>(AppSettings.API_ROOT+'pee-payment-transaction/' + id)
  }
  public addPEEPaymentTransaction(entity : PEEPaymentTransaction): Observable < PEEPaymentTransaction > {
      return this.http.post<PEEPaymentTransaction>(AppSettings.API_ROOT+'pee-payment-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
