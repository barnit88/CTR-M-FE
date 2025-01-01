import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppSettings } from 'src/app/app.setting';
import { ExtendTakeContract } from 'src/app/entity/models/Contract/extend-take-contract';

@Injectable({
  providedIn: 'root'
})
export class ExtendTakeContractService {

    extendTakeContract: ExtendTakeContract[]=[];
    constructor(private http: HttpClient,
      ) { }
      public getExtendTakeContract():Observable<ExtendTakeContract[]>{
          return this.http.get<ExtendTakeContract[]>(AppSettings.API_ROOT+'ExtendTakeContract');
      }
      public addExtendTakeContract(entity: ExtendTakeContract):Observable<ExtendTakeContract>{
          return this.http.post<ExtendTakeContract>(AppSettings.API_ROOT+'ExtendTakeContract', entity);
      }
      public getExtendTakeContractById(id: number):Observable<ExtendTakeContract>{
          return this.http.get<ExtendTakeContract>(AppSettings.API_ROOT+'ExtendTakeContract/'+id);
      }
      public deleteExtendTakeContract(id: number):Observable<any>{
          return this.http.delete<any>(AppSettings.API_ROOT+'ExtendTakeContract/');
      }
      public updateExtendTakeContract(id: number, entity:ExtendTakeContract):Observable<ExtendTakeContract>{
          return this.http.post<ExtendTakeContract>(AppSettings.API_ROOT+'ExtendTakeContract/'+id, entity);
      }
}
