import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class RERPaymentTransactionService {

  rerPayment : RERPaymentTransaction[] = [];

  public getRERentPaymentList(): Observable < RERPaymentTransaction[] > {
      return this.http.get<RERPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getRERPaymentTransactionById(id : number): Observable < RERPaymentTransaction > {
      return this.http.get<RERPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteRERPaymentTransactionById(id : number): Observable < RERPaymentTransaction > {
      return this.http.delete<RERPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addRERPaymentTransaction(entity : RERPaymentTransaction): Observable < RERPaymentTransaction > {
      return this.http.post<RERPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
