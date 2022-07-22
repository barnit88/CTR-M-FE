import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVIPaymentTransaction } from './../../../entity/models/PersonalVehicle/pvipayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class PVIPaymentTransactionService {

  pviPayment : PVIPaymentTransaction[] = [];

  public getPVIncomePaymentList(): Observable < PVIPaymentTransaction[] > {
      return this.http.get<PVIPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getPVIPaymentTransactionById(id : number): Observable < PVIPaymentTransaction > {
      return this.http.get<PVIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePVIPaymentTransactionById(id : number): Observable < PVIPaymentTransaction > {
      return this.http.delete<PVIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addPVIPaymentTransaction(entity : PVIPaymentTransaction): Observable < PVIPaymentTransaction > {
      return this.http.post<PVIPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
