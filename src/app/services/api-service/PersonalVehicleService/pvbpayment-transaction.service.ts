import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVBPaymentTransaction } from './../../../entity/models/PersonalVehicle/pvbpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class PVBPaymentTransactionService {
  pvbPayment : PVBPaymentTransaction[] = [];

  public getEmployeesPayment(): Observable < PVBPaymentTransaction[] > {
      return this.http.get<PVBPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getPVBPaymentTransactionById(id : number): Observable < PVBPaymentTransaction > {
      return this.http.get<PVBPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePVBPaymentTransactionById(id : number): Observable < PVBPaymentTransaction > {
      return this.http.delete<PVBPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addPVBPaymentTransaction(entity : PVBPaymentTransaction): Observable < PVBPaymentTransaction > {
      return this.http.post<PVBPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
