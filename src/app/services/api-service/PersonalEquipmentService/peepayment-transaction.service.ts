import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { PEEPaymentTransaction } from './../../../entity/models/PersonalEquipment/peepayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PEEPaymentTransactionService {
  peePayment : PEEPaymentTransaction[] = [];

  public getPEExpensePaymentList(): Observable < PEEPaymentTransaction[] > {
      return this.http.get<PEEPaymentTransaction[]>(AppSettings.API_ROOT+'PEEPaymentTransaction');
  }
  public getPEEPaymentTransactionById(id : number): Observable < PEEPaymentTransaction > {
      return this.http.get<PEEPaymentTransaction>(AppSettings.API_ROOT+'PEEPaymentTransaction/' + id);
  }
  public deletePEEPaymentTransactionById(id : number): Observable < PEEPaymentTransaction > {
      return this.http.delete<PEEPaymentTransaction>(AppSettings.API_ROOT+'PEEPaymentTransaction/' + id);
  }
  public addPEEPaymentTransaction(entity : PEEPaymentTransaction): Observable < PEEPaymentTransaction > {
      return this.http.post<PEEPaymentTransaction>(AppSettings.API_ROOT+'PEEPaymentTransaction', entity);
  }
  public peePaymentUpdate(id: number, entity: PEEPaymentTransaction): any{
    return this.http.post(AppSettings.API_ROOT+'PEEPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
