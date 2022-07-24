import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LabourPayment} from 'src/app/entity/models/Labour/labour-payment';
import { AppSettings } from 'src/app/app.setting';

@Injectable({providedIn: 'root'})
export class LabourPaymentService {
  labourpayment : LabourPayment[] = [];

  public getLabourPaymentList(): Observable < LabourPayment[] > {
      return this.http.get<LabourPayment[]>(AppSettings.API_ROOT+'labour-payment')
  }
  public getLabourPaymentById(id : number): Observable < LabourPayment > {
      return this.http.get<LabourPayment>(AppSettings.API_ROOT+'labour-payment/' + id)
  }
  public deleteLabourPaymentById(id : number): Observable < LabourPayment > {
      return this.http.delete<LabourPayment>(AppSettings.API_ROOT+'labour-payment/' + id)
  }
  public addLabourPayment(entity : LabourPayment): Observable < LabourPayment > {
      return this.http.post<LabourPayment>(AppSettings.API_ROOT+'labour-payment', entity);
  }

    constructor(private http : HttpClient) {}
}

