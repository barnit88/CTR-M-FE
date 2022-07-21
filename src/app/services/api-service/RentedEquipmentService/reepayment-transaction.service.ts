import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REEPaymentTransaction } from './../../../entity/models/RentedEquipment/reepayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class REEPaymentTransactionService {

  reePayment : REEPaymentTransaction[] = [];

  public getEmployeesPayment(): Observable < REEPaymentTransaction[] > {
      return this.http.get<REEPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getREEPaymentTransactionById(id : number): Observable < REEPaymentTransaction > {
      return this.http.get<REEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteREEPaymentTransactionById(id : number): Observable < REEPaymentTransaction > {
      return this.http.delete<REEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addREEPaymentTransaction(entity : REEPaymentTransaction): Observable < REEPaymentTransaction > {
      return this.http.post<REEPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
