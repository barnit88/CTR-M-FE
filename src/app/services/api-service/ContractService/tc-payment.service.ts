import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppSettings } from 'src/app/app.setting';
import { TCPaymentTransaction } from './../../../entity/models/Contract/tcpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class TakeContractpaymentTransactionService {

    tcPaymentTransaction: TCPaymentTransaction[]=[];
    constructor(private http: HttpClient,
      ) { }
      public getTCPayment():Observable<TCPaymentTransaction[]>{
          return this.http.get<TCPaymentTransaction[]>(AppSettings.API_ROOT+'TCPaymentTransaction');
      }
      public addTCPayment(entity: TCPaymentTransaction):Observable<TCPaymentTransaction>{
          return this.http.post<TCPaymentTransaction>(AppSettings.API_ROOT+'TCPaymentTransaction', entity);
      }
      public getTCPaymentById(id: number):Observable<TCPaymentTransaction>{
          return this.http.get<TCPaymentTransaction>(AppSettings.API_ROOT+'TCPaymentTransaction/'+id);
      }
      public deleteTCPayment(id: number):Observable<any>{
          return this.http.delete<any>(AppSettings.API_ROOT+'TCPaymentTransaction/');
      }
      public updateTCPayment(id: number, entity:TCPaymentTransaction):Observable<TCPaymentTransaction>{
          return this.http.post<TCPaymentTransaction>(AppSettings.API_ROOT+'TCPaymentTransaction/'+id, entity);
      }
}
