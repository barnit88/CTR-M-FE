import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RVRPaymentTransaction } from './../../../entity/models/RentedVehicle/rvrpayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class RVRPaymentTransactionService {
  rvrPayment : RVRPaymentTransaction[] = [];

  public getRVRentPaymentList(): Observable < RVRPaymentTransaction[] > {
      return this.http.get<RVRPaymentTransaction[]>(AppSettings.API_ROOT+'RVRPaymenttransaction')
  }
  public getRVRPaymentTransactionById(id : number): Observable < RVRPaymentTransaction > {
      return this.http.get<RVRPaymentTransaction>(AppSettings.API_ROOT+'RVRPaymenttransaction/' + id)
  }
  public deleteRVRPaymentTransactionById(id : number): Observable < RVRPaymentTransaction > {
      return this.http.delete<RVRPaymentTransaction>(AppSettings.API_ROOT+'RVRPaymenttransaction/' + id)
  }
  public addRVRPaymentTransaction(entity : RVRPaymentTransaction): Observable < RVRPaymentTransaction > {
      return this.http.post<RVRPaymentTransaction>(AppSettings.API_ROOT+'RVRPaymenttransaction', entity);
  }
  public rvrPaymentUpdate(id: number, entity: RVRPaymentTransaction): any{
    this.http.post(AppSettings.API_ROOT+'RVRPAymenttransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
