import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVBPaymentTransaction } from './../../../entity/models/PersonalVehicle/pvbpayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PVBPaymentTransactionService {
  pvbPayment : PVBPaymentTransaction[] = [];

  public getPVBoughtPaymentList(): Observable < PVBPaymentTransaction[] > {
      return this.http.get<PVBPaymentTransaction[]>(AppSettings.API_ROOT+'PVBPaymentTransaction')
  }
  public getPVBPaymentTransactionById(id : number): Observable < PVBPaymentTransaction > {
      return this.http.get<PVBPaymentTransaction>(AppSettings.API_ROOT+'PVBPaymentTransaction/' + id)
  }
  public deletePVBPaymentTransactionById(id : number): Observable < PVBPaymentTransaction > {
      return this.http.delete<PVBPaymentTransaction>(AppSettings.API_ROOT+'PVBPaymentTransaction/' + id)
  }
  public addPVBPaymentTransaction(entity : PVBPaymentTransaction): Observable < PVBPaymentTransaction > {
      return this.http.post<PVBPaymentTransaction>(AppSettings.API_ROOT+'PVBPaymentTransaction', entity);
  }
  public pvbPaymentUpdate(id: number, entity: PVBPaymentTransaction){
    return this.http.post(AppSettings.API_ROOT+'PVBPaymentTransaction/'+id, entity);
  }

  constructor(private http: HttpClient) { }
}
