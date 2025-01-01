import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { RERPaymentTransaction } from 'src/app/entity/models/RentedEquipment/rerpayment-transaction';
import { AppSettings } from 'src/app/app.setting';
import { RVRPaymentTransaction } from './../../../entity/models/RentedVehicle/rvrpayment-transaction';

@Injectable({
  providedIn: 'root'
})
export class RERPaymentTransactionService {

  rerPayment : RERPaymentTransaction[] = [];

  public getRERentPaymentList(): Observable < RERPaymentTransaction[] > {
      return this.http.get<RERPaymentTransaction[]>(AppSettings.API_ROOT+'RERPaymentTransaction')
  }
  public getRERPaymentTransactionById(id : number): Observable < RERPaymentTransaction > {
      return this.http.get<RERPaymentTransaction>(AppSettings.API_ROOT+'RERPaymentTransaction/' + id)
  }
  public deleteRERPaymentTransactionById(id : number): Observable < RERPaymentTransaction > {
      return this.http.delete<RERPaymentTransaction>(AppSettings.API_ROOT+'RERPaymentTransaction/' + id)
  }
  public addRERPaymentTransaction(entity : RERPaymentTransaction): Observable < RERPaymentTransaction > {
      return this.http.post<RERPaymentTransaction>(AppSettings.API_ROOT+'RERPaymentTransaction', entity);
  }
  public rerPaymentUpdate(id: number, entity: RERPaymentTransaction): any{
    return this.http.post(AppSettings.API_ROOT+'RVRPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
