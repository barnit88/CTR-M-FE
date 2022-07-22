import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { MBPaymentTransaction } from './../../../entity/models/Material/mbpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class MBPaymentTransactionService {
  mbPayment : MBPaymentTransaction[] = [];

  public getMBPaymentList(): Observable < MBPaymentTransaction[] > {
      return this.http.get<MBPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getMBPaymentTransactionById(id : number): Observable < MBPaymentTransaction > {
      return this.http.get<MBPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMBPaymentTransactionById(id : number): Observable < MBPaymentTransaction > {
      return this.http.delete<MBPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addMBPaymentTransaction(entity : MBPaymentTransaction): Observable < MBPaymentTransaction > {
      return this.http.post<MBPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
