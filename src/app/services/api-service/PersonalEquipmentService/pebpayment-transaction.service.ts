import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PEBPaymentTransaction } from './../../../entity/models/PersonalEquipment/pebpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class PEBPaymentTransactionService {
  pebPayment : PEBPaymentTransaction[] = [];

  public getPEBoughtPaymentList(): Observable < PEBPaymentTransaction[] > {
      return this.http.get<PEBPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getPEBPaymentTransactionById(id : number): Observable < PEBPaymentTransaction > {
      return this.http.get<PEBPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePEBPaymentTransactionById(id : number): Observable < PEBPaymentTransaction > {
      return this.http.delete<PEBPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addPEBPaymentTransaction(entity : PEBPaymentTransaction): Observable < PEBPaymentTransaction > {
      return this.http.post<PEBPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
