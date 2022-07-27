import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REIPaymentTransaction } from 'src/app/entity/models/RentedEquipment/reipayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class REIPaymentTransactionService {

  reiPayment : REIPaymentTransaction[] = [];

  public getREIncomePaymentList(): Observable < REIPaymentTransaction[] > {
      return this.http.get<REIPaymentTransaction[]>(AppSettings.API_ROOT+'REIPaymentTransaction')
  }
  public getREIPaymentTransactionById(id : number): Observable < REIPaymentTransaction > {
      return this.http.get<REIPaymentTransaction>(AppSettings.API_ROOT+'REIPaymentTransaction/' + id)
  }
  public deleteREIPaymentTransactionById(id : number): Observable < REIPaymentTransaction > {
      return this.http.delete<REIPaymentTransaction>(AppSettings.API_ROOT+'REIPaymentTransaction/' + id)
  }
  public addREIPaymentTransaction(entity : REIPaymentTransaction): Observable < REIPaymentTransaction > {
      return this.http.post<REIPaymentTransaction>(AppSettings.API_ROOT+'REIPaymentTransaction', entity);
  }
  public reiPaymentUpdate(id: number, entity: REIPaymentTransaction): any{
    return this.http.post<REIPaymentTransaction>(AppSettings.API_ROOT+'REIPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
