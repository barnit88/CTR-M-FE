import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppSettings } from 'src/app/app.setting';
import { TakeContract } from 'src/app/entity/models/Contract/take-contract';

@Injectable({
  providedIn: 'root'
})
export class TakeContractService {

    takeContract: TakeContract[]=[];
    constructor(private http: HttpClient,
      ) { }
      public getTakeContract():Observable<TakeContract[]>{
          return this.http.get<TakeContract[]>(AppSettings.API_ROOT+'TakeContract');
      }
      public addTakeContract(entity: TakeContract):Observable<TakeContract>{
          return this.http.post<TakeContract>(AppSettings.API_ROOT+'TakeContract', entity);
      }
      public getTakeContractById(id: number):Observable<TakeContract>{
          return this.http.get<TakeContract>(AppSettings.API_ROOT+'TakeContract/'+id);
      }
      public deleteTakeContract(id: number):Observable<any>{
          return this.http.delete<any>(AppSettings.API_ROOT+'TakeContract/');
      }
      public updateTakeContract(id: number, entity:TakeContract):Observable<TakeContract>{
          return this.http.post<TakeContract>(AppSettings.API_ROOT+'TakeContract/'+id, entity);
      }
}
