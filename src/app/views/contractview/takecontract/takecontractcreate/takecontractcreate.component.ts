import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TakeContract } from './../../../../entity/models/Contract/take-contract';
import { NgForm } from '@angular/forms';
import { TakeContractTitle } from 'src/app/entity/Enum/Enums';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TakeContractService } from './../../../../services/api-service/ContractService/take-contract.service';
import { ClientService } from './../../../../services/api-service/ClientService/client.service';
import { Client } from 'src/app/entity/models/Client/client';
import { SiteService } from './../../../../services/api-service/SiteService/site.service';
import { Site } from 'src/app/entity/models/Site/site';

@Component({
  selector: 'app-takecontractcreate',
  templateUrl: './takecontractcreate.component.html',
  styleUrls: ['./takecontractcreate.component.css']
})
export class TakecontractcreateComponent implements OnInit, OnChanges{
  data:TakeContract;
  title:TakeContractTitle.Create;
  clients: Client[]=[];
  sites:Site[]=[];
  
  constructor(private modelRef: BsModalRef,
    private takeContractService: TakeContractService,
    private clientService:ClientService,
    private siteService:SiteService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getClientList();
    this.getSiteList();
  }

  addClient(_$event: any): any{
    console.log('the option selected chnage detection'+_$event);
    
  }
  //get clients function
  private getClientList(): any{
    this.clientService.getAll().subscribe(
      (data)=> this.clients = data,
      (error)=> console.log(error),
      ()=>console.log(this.clients));
  }
  //get sites function 
  private getSiteList(): any{
    this.siteService.getSiteList().subscribe(
      (data)=> this.sites = data,
      (error)=>console.log(error),
      ()=> console.log(this.sites));
  }

  //submit function
  public takeContractSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      try {
        this.AddTC();
      } catch (error) {
        console.log('error: While data add');        
      }
    } else {
      this.UpdateTC();
    }
    this.modelRef.hide();
    console.log(this.data);
  }
  private AddTC(): void {
    this.takeContractService.addTakeContract(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error));
  }
  private UpdateTC(): void {
    this.takeContractService.updateTakeContract(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
