import { Component, OnInit } from '@angular/core';
import { GiveContract } from './../../../../entity/models/Contract/give-contract';
import { NgForm } from '@angular/forms';
import { GiveContractTitle } from 'src/app/entity/Enum/Enums';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GiveContractService } from './../../../../services/api-service/ContractService/give-contract.service';
import { Client } from 'src/app/entity/models/Client/client';
import { ClientService } from './../../../../services/api-service/ClientService/client.service';
import { Site } from 'src/app/entity/models/Site/site';
import { SiteService } from './../../../../services/api-service/SiteService/site.service';

@Component({
  selector: 'app-givecontractcreate',
  templateUrl: './givecontractcreate.component.html',
  styleUrls: ['./givecontractcreate.component.css']
})
export class GivecontractcreateComponent implements OnInit {
  title:GiveContractTitle.Create;
  data:GiveContract;
  clients:Client[]=[];
  sites:Site[]=[];
  
  constructor(private modelRef: BsModalRef,
    private giveContractService: GiveContractService,
    private clientService:ClientService,
    private siteService:SiteService) { }

  ngOnInit(): void {
    this.getClientList();
  }

  clientIdValid = false;
  validSiteId = false;

  public addClientId(event): void{
    if(Number.parseInt(event.target.value)){
       this.data.ClientId = event.target.value;
    } else{
      this.clientIdValid= true;
    }
    console.log(this.data);
  }

  public assignSiteId(event): void{
    if(Number.parseInt(event.target.value)){
      this.validSiteId =false;
      this.data.SiteId = event.target.value
    }else{
      this.validSiteId = true;
    }
  }

  public getClientList(): void{
    this.clientService.getAll().subscribe(
      (data)=> this.clients=data,
      (error)=> console.log(error),
      ()=> console.log(this.clients));
  }

  public getSiteList(): void{
    this.siteService.getList().subscribe(
      (res)=> this.sites = res,
      (error)=> console.log(error),
      ()=> console.log('done with fetching list'+this.sites));
  }
  
  public giveContractSubmit(): void{
    console.log('submit function'+this.data);
    
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddGC();
    } else {
      this.UpdateGC();
    }
    this.modelRef.hide();
  }

  private AddGC(): void {
    this.giveContractService.addGiveContract(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error));
  }

  private UpdateGC(): void {
    this.giveContractService.updateGiveContract(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
}
