import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppSettings } from 'src/app/app.setting';
import { GCPaymentTransaction } from './../../../entity/models/Contract/gcpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class GiveContractPaymentTransactionService {

    extendGiveContractPayment: GCPaymentTransaction[]=[];
    constructor(private http: HttpClient,
      ) { }
      public getExtendGiveContractPayment():Observable<GCPaymentTransaction[]>{
          return this.http.get<GCPaymentTransaction[]>(AppSettings.API_ROOT+'GCPaymentTransaction');
      }
      public addGCPaymentTransaction(entity: GCPaymentTransaction):Observable<GCPaymentTransaction>{
          return this.http.post<GCPaymentTransaction>(AppSettings.API_ROOT+'GCPaymentTransaction', entity);
      }
      public getGCPaymentTransactionById(id: number):Observable<GCPaymentTransaction>{
          return this.http.get<GCPaymentTransaction>(AppSettings.API_ROOT+'GCPaymentTransaction/'+id);
      }
      public deleteGCPaymentTransaction(id: number):Observable<any>{
          return this.http.delete<any>(AppSettings.API_ROOT+'GCPaymentTransaction/');
      }
      public updateGCPaymentTransaction(id: number, entity:GCPaymentTransaction):Observable<GCPaymentTransaction>{
          return this.http.post<GCPaymentTransaction>(AppSettings.API_ROOT+'GCPaymentTransaction/'+id, entity);
      }
}
