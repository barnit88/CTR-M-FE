import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RERPaymentTransactionService {

  rerPayment : RERPaymentTransaction[] = [];

  public getRERentPaymentList(): Observable < RERPaymentTransaction[] > {
      return this.http.get<RERPaymentTransaction[]>(AppSettings.API_ROOT+'rer-paymet-transaction')
  }
  public getRERPaymentTransactionById(id : number): Observable < RERPaymentTransaction > {
      return this.http.get<RERPaymentTransaction>(AppSettings.API_ROOT+'rer-paymet-transaction/' + id)
  }
  public deleteRERPaymentTransactionById(id : number): Observable < RERPaymentTransaction > {
      return this.http.delete<RERPaymentTransaction>(AppSettings.API_ROOT+'rer-paymet-transaction/' + id)
  }
  public addRERPaymentTransaction(entity : RERPaymentTransaction): Observable < RERPaymentTransaction > {
      return this.http.post<RERPaymentTransaction>(AppSettings.API_ROOT+'rer-paymet-transaction', entity);
  }

  constructor(private http: HttpClient) { }
}
