import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVEPaymentTransaction } from 'src/app/entity/models/PersonalVehicle/pvepayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class PVEPaymentTransactionService {
  pvePayment : PVEPaymentTransaction[] = [];

  public getPVExpensePaymentList(): Observable < PVEPaymentTransaction[] > {
      return this.http.get<PVEPaymentTransaction[]>('http://localhost:3000/employee-payment')
  }
  public getPVEPaymentTransactionById(id : number): Observable < PVEPaymentTransaction > {
      return this.http.get<PVEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public deletePVEPaymentTransactionById(id : number): Observable < PVEPaymentTransaction > {
      return this.http.delete<PVEPaymentTransaction>('http://localhost:3000/employee-payment/' + id)
  }
  public addPVEPaymentTransaction(entity : PVEPaymentTransaction): Observable < PVEPaymentTransaction > {
      return this.http.post<PVEPaymentTransaction>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
