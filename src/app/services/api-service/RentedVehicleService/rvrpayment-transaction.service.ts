import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVRPaymentTransaction } from './../../../entity/models/RentedVehicle/rvrpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class RVRPaymentTransactionService {
  rvrPayment : RVRPaymentTransaction[] = [];

  public getRVRentPaymentList(): Observable < RVRPaymentTransaction[] > {
      return this.http.get<RVRPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getRVRPaymentTransactionById(id : number): Observable < RVRPaymentTransaction > {
      return this.http.get<RVRPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRVRPaymentTransactionById(id : number): Observable < RVRPaymentTransaction > {
      return this.http.delete<RVRPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addRVRPaymentTransaction(entity : RVRPaymentTransaction): Observable < RVRPaymentTransaction > {
      return this.http.post<RVRPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
