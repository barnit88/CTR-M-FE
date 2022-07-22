import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REIPaymentTransaction } from 'src/app/entity/models/RentedEquipment/reipayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class REIPaymentTransactionService {

  reiPayment : REIPaymentTransaction[] = [];

  public getREIncomePaymentList(): Observable < REIPaymentTransaction[] > {
      return this.http.get<REIPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getREIPaymentTransactionById(id : number): Observable < REIPaymentTransaction > {
      return this.http.get<REIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteREIPaymentTransactionById(id : number): Observable < REIPaymentTransaction > {
      return this.http.delete<REIPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addREIPaymentTransaction(entity : REIPaymentTransaction): Observable < REIPaymentTransaction > {
      return this.http.post<REIPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
