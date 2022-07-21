import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MSPaymentTransactionService {
  msPayment : MSPaymentTransactionService[] = [];

  public getEmployeesPayment(): Observable < MSPaymentTransactionService[] > {
      return this.http.get<MSPaymentTransactionService[]>('http://localhost:3000/employee-payment')
  }
  public getMSPaymentTransactionServiceById(id : number): Observable < MSPaymentTransactionService > {
      return this.http.get<MSPaymentTransactionService>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMSPaymentTransactionServiceById(id : number): Observable < MSPaymentTransactionService > {
      return this.http.delete<MSPaymentTransactionService>('http://localhost:3000/employee-payment/' + id)
  }
  public addMSPaymentTransactionService(entity : MSPaymentTransactionService): Observable < MSPaymentTransactionService > {
      return this.http.post<MSPaymentTransactionService>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
