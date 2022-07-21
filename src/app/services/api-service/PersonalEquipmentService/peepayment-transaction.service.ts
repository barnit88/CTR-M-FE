import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PEEPaymentTransaction } from './../../../entity/models/PersonalEquipment/peepayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class PEEPaymentTransactionService {
  peePayment : PEEPaymentTransaction[] = [];

  public getEmployeesPayment(): Observable < PEEPaymentTransaction[] > {
      return this.http.get<PEEPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getPEEPaymentTransactionById(id : number): Observable < PEEPaymentTransaction > {
      return this.http.get<PEEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePEEPaymentTransactionById(id : number): Observable < PEEPaymentTransaction > {
      return this.http.delete<PEEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addPEEPaymentTransaction(entity : PEEPaymentTransaction): Observable < PEEPaymentTransaction > {
      return this.http.post<PEEPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
