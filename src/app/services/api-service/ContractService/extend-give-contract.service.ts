import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExtendGiveContract } from 'src/app/entity/models/Contract/extend-give-contract';
import { Observable } from 'rxjs';
import { AppSettings } from './../../../app.setting';
@Injectable({
  providedIn: 'root'
})
export class ExtendGiveContractService {
extendGiveContract: ExtendGiveContract[]=[];
  constructor(private http: HttpClient,
    ) { }

    public getExtendGiveContract():Observable<ExtendGiveContract[]>{
        return this.http.get<ExtendGiveContract[]>(AppSettings.API_ROOT+'ExtendGiveContract');
    }
    
    public addExtendGiveContract(entity: ExtendGiveContract):Observable<ExtendGiveContract>{
        return this.http.post<ExtendGiveContract>(AppSettings.API_ROOT+'ExtendGiveContract', entity);
    }
    
    public getExtendGiveContractById(id: number):Observable<ExtendGiveContract>{
        return this.http.get<ExtendGiveContract>(AppSettings.API_ROOT+'ExtendGiveContract/'+id);
    }
    
    public deleteExtendGiveContract(id: number):Observable<any>{
        return this.http.delete<any>(AppSettings.API_ROOT+'ExtendGiveContract/');
    }
    
    public updateExtendGiveContract(id: number, entity:ExtendGiveContract):Observable<ExtendGiveContract>{
        return this.http.post<ExtendGiveContract>(AppSettings.API_ROOT+'ExtendGiveContract/'+id, entity);
    }

}
