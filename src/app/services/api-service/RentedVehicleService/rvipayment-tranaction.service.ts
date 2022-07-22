import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVIPaymentTransaction } from './../../../entity/models/RentedVehicle/rvipayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class RVIPaymentTranactionService {

  rviPayment : RVIPaymentTransaction[] = [];

  public getRVIncomePaymentList(): Observable < RVIPaymentTransaction[] > {
      return this.http.get<RVIPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getRVIPaymentTransactionById(id : number): Observable < RVIPaymentTransaction > {
      return this.http.get<RVIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRVIPaymentTransactionById(id : number): Observable < RVIPaymentTransaction > {
      return this.http.delete<RVIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addRVIPaymentTransaction(entity : RVIPaymentTransaction): Observable < RVIPaymentTransaction > {
      return this.http.post<RVIPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
