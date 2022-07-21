import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PEIPaymentTransaction } from './../../../entity/models/PersonalEquipment/peipayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class PEIPaymentTransctionService {

  peiPayment : PEIPaymentTransaction[] = [];

  public getEmployeesPayment(): Observable < PEIPaymentTransaction[] > {
      return this.http.get<PEIPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getPEIPaymentTransactionById(id : number): Observable < PEIPaymentTransaction > {
      return this.http.get<PEIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePEIPaymentTransactionById(id : number): Observable < PEIPaymentTransaction > {
      return this.http.delete<PEIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addPEIPaymentTransaction(entity : PEIPaymentTransaction): Observable < PEIPaymentTransaction > {
      return this.http.post<PEIPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
