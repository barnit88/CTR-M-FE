import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVEPaymentTransaction } from 'src/app/entity/models/PersonalVehicle/pvepayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PVEPaymentTransactionService {
  pvePayment : PVEPaymentTransaction[] = [];

  public getPVExpensePaymentList(): Observable < PVEPaymentTransaction[] > {
      return this.http.get<PVEPaymentTransaction[]>(AppSettings.API_ROOT+'pve-payment-transaction')
  }
  public getPVEPaymentTransactionById(id : number): Observable < PVEPaymentTransaction > {
      return this.http.get<PVEPaymentTransaction>(AppSettings.API_ROOT+'pve-payment-transaction/' + id)
  }
  public deletePVEPaymentTransactionById(id : number): Observable < PVEPaymentTransaction > {
      return this.http.delete<PVEPaymentTransaction>(AppSettings.API_ROOT+'pve-payment-transaction/' + id)
  }
  public addPVEPaymentTransaction(entity : PVEPaymentTransaction): Observable < PVEPaymentTransaction > {
      return this.http.post<PVEPaymentTransaction>(AppSettings.API_ROOT+'pve-payment-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
