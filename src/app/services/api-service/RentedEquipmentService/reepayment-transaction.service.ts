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
      return this.http.get<REEPaymentTransaction[]>(AppSettings.API_ROOT+'REEpaymentTransaction')
  }
  public getREEPaymentTransactionById(id : number): Observable < REEPaymentTransaction > {
      return this.http.get<REEPaymentTransaction>(AppSettings.API_ROOT+'REEpaymentTransaction/' + id)
  }
  public deleteREEPaymentTransactionById(id : number): Observable < REEPaymentTransaction > {
      return this.http.delete<REEPaymentTransaction>(AppSettings.API_ROOT+'REEpaymentTransaction/' + id)
  }
  public addREEPaymentTransaction(entity : REEPaymentTransaction): Observable < REEPaymentTransaction > {
      return this.http.post<REEPaymentTransaction>(AppSettings.API_ROOT+'REEpaymentTransaction', entity);
  }
  public reePaymentUpdate(id: number, entity: REEPaymentTransaction): any{
    return this.http.post<REEPaymentTransaction>(AppSettings.API_ROOT+'REEPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
