import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { MSPaymentTransaction } from './../../../entity/models/Material/mspayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class MSPaymentTransactionService {
  msPayment : MSPaymentTransaction[] = [];

  public getMSpaymentList(): Observable < MSPaymentTransaction[] > {
      return this.http.get<MSPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getMSPaymentTransactionServiceById(id : number): Observable < MSPaymentTransaction > {
      return this.http.get<MSPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMSPaymentTransactionServiceById(id : number): Observable < MSPaymentTransaction > {
      return this.http.delete<MSPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addMSPaymentTransactionService(entity : MSPaymentTransaction): Observable < MSPaymentTransaction > {
      return this.http.post<MSPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
