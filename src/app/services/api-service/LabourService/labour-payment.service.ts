import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LabourPayment } from 'src/app/entity/models/Labour/labour-payment';

@Injectable({
  providedIn: 'root'
})
export class LabourPaymentService {
  employees: LabourPayment[]=[];

  public getLAbourPayment(): Observable<LabourPayment[]> {
    return this.http.get<LabourPayment[]>('http://localhost:3000/employees')
}
  
constructor(private http:HttpClient){}
}
