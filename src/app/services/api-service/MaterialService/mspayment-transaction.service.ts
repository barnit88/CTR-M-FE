import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { MSPaymentTransaction } from './../../../entity/models/Material/mspayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class MSPaymentTransactionService {
  msPayment : MSPaymentTransaction[] = [];

  public getMSpaymentList(): Observable < MSPaymentTransaction[] > {
      return this.http.get<MSPaymentTransaction[]>(AppSettings.API_ROOT+'MSPaymentTransaction')
  }
  public getMSPaymentTransactionServiceById(id : number): Observable < MSPaymentTransaction > {
      return this.http.get<MSPaymentTransaction>(AppSettings.API_ROOT+'MSPaymentTransaction/' + id)
  }
  public deleteMSPaymentTransactionServiceById(id : number): Observable < MSPaymentTransaction > {
      return this.http.delete<MSPaymentTransaction>(AppSettings.API_ROOT+'MSPaymentTransaction/' + id)
  }
  public addMSPaymentTransactionService(entity : MSPaymentTransaction): Observable < MSPaymentTransaction > {
      return this.http.post<MSPaymentTransaction>(AppSettings.API_ROOT+'MSPaymentTransaction', entity);
  }
  public msPaymentUpdate(id: number, entity: MSPaymentTransaction): any{
    return this.http.post(AppSettings.API_ROOT+'MSPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
