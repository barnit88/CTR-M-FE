import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LabourPayment} from 'src/app/entity/models/Labour/labour-payment';

@Injectable({providedIn: 'root'})
export class LabourPaymentService {
  labourpayment : LabourPayment[] = [];

  public getLabourPayments(): Observable < LabourPayment[] > {
      return this.http.get<LabourPayment[]>('http://localhost:3000/employee-payment')
  }
  public getLabourPaymentById(id : number): Observable < LabourPayment > {
      return this.http.get<LabourPayment>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteLabourPaymentById(id : number): Observable < LabourPayment > {
      return this.http.delete<LabourPayment>('http://localhost:3000/employee-payment/' + id)
  }
  public addLabourPayment(entity : LabourPayment): Observable < LabourPayment > {
      return this.http.post<LabourPayment>('http://localhost:3000/employee-payment/', entity);
  }

    constructor(private http : HttpClient) {}
}

