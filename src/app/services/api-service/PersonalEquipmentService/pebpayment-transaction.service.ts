import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PEBPaymentTransaction } from './../../../entity/models/PersonalEquipment/pebpayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PEBPaymentTransactionService {
  pebPayment : PEBPaymentTransaction[] = [];

  public getPEBoughtPaymentList(): Observable < PEBPaymentTransaction[] > {
      return this.http.get<PEBPaymentTransaction[]>(AppSettings.API_ROOT+'PEBPaymentTransaction')
  }
  public getPEBPaymentTransactionById(id : number): Observable < PEBPaymentTransaction > {
      return this.http.get<PEBPaymentTransaction>(AppSettings.API_ROOT+'PEBPaymentTransaction/' + id)
  }
  public deletePEBPaymentTransactionById(id : number): Observable < PEBPaymentTransaction > {
      return this.http.delete<PEBPaymentTransaction>(AppSettings.API_ROOT+'PEBPaymentTransaction/' + id)
  }
  public addPEBPaymentTransaction(entity : PEBPaymentTransaction): Observable < PEBPaymentTransaction > {
      return this.http.post<PEBPaymentTransaction>(AppSettings.API_ROOT+'PEBPaymentTransaction', entity);
  }
  public pebPaymentUpdate(id: number, entity: PEBPaymentTransaction): any{
    return this.http.post(AppSettings.API_ROOT+'PEBPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
