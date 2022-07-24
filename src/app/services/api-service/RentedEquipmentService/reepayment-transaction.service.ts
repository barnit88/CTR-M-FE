import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REEPaymentTransaction } from './../../../entity/models/RentedEquipment/reepayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class REEPaymentTransactionService {

  reePayment : REEPaymentTransaction[] = [];

  public getREExpensePaymentList(): Observable < REEPaymentTransaction[] > {
      return this.http.get<REEPaymentTransaction[]>(AppSettings.API_ROOT+'ree-payment-transaction')
  }
  public getREEPaymentTransactionById(id : number): Observable < REEPaymentTransaction > {
      return this.http.get<REEPaymentTransaction>(AppSettings.API_ROOT+'ree-payment-transaction/' + id)
  }
  public deleteREEPaymentTransactionById(id : number): Observable < REEPaymentTransaction > {
      return this.http.delete<REEPaymentTransaction>(AppSettings.API_ROOT+'ree-payment-transaction/' + id)
  }
  public addREEPaymentTransaction(entity : REEPaymentTransaction): Observable < REEPaymentTransaction > {
      return this.http.post<REEPaymentTransaction>(AppSettings.API_ROOT+'ree-payment-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
