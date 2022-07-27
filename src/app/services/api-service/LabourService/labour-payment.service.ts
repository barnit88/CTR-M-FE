import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LabourPayment} from 'src/app/entity/models/Labour/labour-payment';
import { AppSettings } from 'src/app/app.setting';

@Injectable({providedIn: 'root'})
export class LabourPaymentService {
  labourpayment : LabourPayment[] = [];

  public getLabourPaymentList(): Observable < LabourPayment[] > {
      return this.http.get<LabourPayment[]>(AppSettings.API_ROOT+'LabourPayment');
  }
  public getLabourPaymentById(id : number): Observable < LabourPayment > {
      return this.http.get<LabourPayment>(AppSettings.API_ROOT+'LabourPayment/' + id);
  }
  public deleteLabourPaymentById(id : number): Observable < LabourPayment > {
      return this.http.delete<LabourPayment>(AppSettings.API_ROOT+'LabourPayment/' + id);
  }
  public addLabourPayment(entity : LabourPayment): Observable < LabourPayment > {
      return this.http.post<LabourPayment>(AppSettings.API_ROOT+'LabourPayment', entity);
  }
  public labourPaymentUpdate(id: number, entity: LabourPayment): any{
    return this.http.post(AppSettings.API_ROOT+'LabourPaymentTransaction/'+id, entity);
  }

    constructor(private http : HttpClient) {}
}

