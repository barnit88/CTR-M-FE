import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVEPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvepayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class RVEPaymentTransactionService {
  rvePayment : RVEPaymentTransaction[] = [];

  public getEmployeesPayment(): Observable < RVEPaymentTransaction[] > {
      return this.http.get<RVEPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getRVEPaymentTransactionById(id : number): Observable < RVEPaymentTransaction > {
      return this.http.get<RVEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRVEPaymentTransactionById(id : number): Observable < RVEPaymentTransaction > {
      return this.http.delete<RVEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addRVEPaymentTransaction(entity : RVEPaymentTransaction): Observable < RVEPaymentTransaction > {
      return this.http.post<RVEPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
