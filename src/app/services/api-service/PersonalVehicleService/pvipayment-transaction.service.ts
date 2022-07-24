import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVIPaymentTransaction } from './../../../entity/models/PersonalVehicle/pvipayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PVIPaymentTransactionService {

  pviPayment : PVIPaymentTransaction[] = [];

  public getPVIncomePaymentList(): Observable < PVIPaymentTransaction[] > {
      return this.http.get<PVIPaymentTransaction[]>(AppSettings.API_ROOT+'pvi-payment-transaction')
  }
  public getPVIPaymentTransactionById(id : number): Observable < PVIPaymentTransaction > {
      return this.http.get<PVIPaymentTransaction>(AppSettings.API_ROOT+'pvi-payment-transaction/' + id)
  }
  public deletePVIPaymentTransactionById(id : number): Observable < PVIPaymentTransaction > {
      return this.http.delete<PVIPaymentTransaction>(AppSettings.API_ROOT+'pvi-payment-transaction/' + id)
  }
  public addPVIPaymentTransaction(entity : PVIPaymentTransaction): Observable < PVIPaymentTransaction > {
      return this.http.post<PVIPaymentTransaction>(AppSettings.API_ROOT+'pvi-payment-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
