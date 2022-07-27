import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AppSettings } from 'src/app/app.setting';
import { GiveContract } from './../../../entity/models/Contract/give-contract';

@Injectable({
  providedIn: 'root'
})
export class GiveContractService {

  giveContract: GiveContract[]=[];
  constructor(private http: HttpClient,
    ) { }
    public getGiveContract():Observable<GiveContract[]>{
        return this.http.get<GiveContract[]>(AppSettings.API_ROOT+'GiveContract');
    }
    public addGiveContract(entity: GiveContract):Observable<GiveContract>{
        return this.http.post<GiveContract>(AppSettings.API_ROOT+'GiveContract', entity);
    }
    public getGiveContractById(id: number):Observable<GiveContract>{
        return this.http.get<GiveContract>(AppSettings.API_ROOT+'GiveContract/'+id);
    }
    public deleteGiveContract(id: number):Observable<any>{
        return this.http.delete<any>(AppSettings.API_ROOT+'GiveContract/');
    }
    public updateGiveContract(id: number, entity:GiveContract):Observable<GiveContract>{
        return this.http.post<GiveContract>(AppSettings.API_ROOT+'GiveContract/'+id, entity);
    }
}
