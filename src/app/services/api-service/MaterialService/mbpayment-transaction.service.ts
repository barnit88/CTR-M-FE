import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MBPaymentTransactionService {
  mbPayment : MBPaymentTransactionService[] = [];

  public getEmployeesPayment(): Observable < MBPaymentTransactionService[] > {
      return this.http.get<MBPaymentTransactionService[]>('http://localhost:3000/employee-payment')
  }
  public getMBPaymentTransactionServiceById(id : number): Observable < MBPaymentTransactionService > {
      return this.http.get<MBPaymentTransactionService>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteMBPaymentTransactionServiceById(id : number): Observable < MBPaymentTransactionService > {
      return this.http.delete<MBPaymentTransactionService>('http://localhost:3000/employee-payment/' + id)
  }
  public addMBPaymentTransactionService(entity : MBPaymentTransactionService): Observable < MBPaymentTransactionService > {
      return this.http.post<MBPaymentTransactionService>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
