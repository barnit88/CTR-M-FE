import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PEIPaymentTransaction } from './../../../entity/models/PersonalEquipment/peipayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PEIPaymentTransctionService {

  peiPayment : PEIPaymentTransaction[] = [];

  public getPEIncomePaymentList(): Observable < PEIPaymentTransaction[] > {
      return this.http.get<PEIPaymentTransaction[]>(AppSettings.API_ROOT+'pei-payment-transaction')
  }
  public getPEIPaymentTransactionById(id : number): Observable < PEIPaymentTransaction > {
      return this.http.get<PEIPaymentTransaction>(AppSettings.API_ROOT+'pei-payment-transaction/' + id)
  }
  public deletePEIPaymentTransactionById(id : number): Observable < PEIPaymentTransaction > {
      return this.http.delete<PEIPaymentTransaction>(AppSettings.API_ROOT+'pei-payment-transaction/' + id)
  }
  public addPEIPaymentTransaction(entity : PEIPaymentTransaction): Observable < PEIPaymentTransaction > {
      return this.http.post<PEIPaymentTransaction>(AppSettings.API_ROOT+'pei-payment-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
