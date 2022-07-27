import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PVEPaymentTransaction } from 'src/app/entity/models/PersonalVehicle/pvepayment-transaction';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class PVEPaymentTransactionService {
  pvePayment : PVEPaymentTransaction[] = [];

  public getPVExpensePaymentList(): Observable < PVEPaymentTransaction[] > {
      return this.http.get<PVEPaymentTransaction[]>(AppSettings.API_ROOT+'PVEPaymenttRansaction')
  }
  public getPVEPaymentTransactionById(id : number): Observable < PVEPaymentTransaction > {
      return this.http.get<PVEPaymentTransaction>(AppSettings.API_ROOT+'PVEPaymenttRansaction/' + id)
  }
  public deletePVEPaymentTransactionById(id : number): Observable < PVEPaymentTransaction > {
      return this.http.delete<PVEPaymentTransaction>(AppSettings.API_ROOT+'PVEPaymenttRansaction/' + id)
  }
  public addPVEPayment(entity : PVEPaymentTransaction): Observable < PVEPaymentTransaction > {
      return this.http.post<PVEPaymentTransaction>(AppSettings.API_ROOT+'PVEPaymenttRansaction', entity);
  }
  public pveUpdatePayment(id: number, entity: PVEPaymentTransaction){
    return this.http.post(AppSettings.API_ROOT+'PVEPaymentTransaction/'+id, entity)
  }

  constructor(private http: HttpClient) { }
}
