import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TakeContract } from './../../../../entity/models/Contract/take-contract';
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
export class TakecontractcreateComponent implements OnInit{
  data:TakeContract;
  title:TakeContractTitle.Create;
  clients: Client[]=[];
  sites:Site[]=[];

  constructor(private modelRef: BsModalRef,
    private takeContractService: TakeContractService,
    private clientService:ClientService,
    private siteService:SiteService) { }


  invalidClientId :boolean = false;
  invalidSiteId: boolean = false;

  assignClientId(event){
    console.log(event.target)
    if(Number.parseInt(event.target.value)){
      this.invalidClientId = false;
      this.data.ClientId=event.target.value;
    }else{
      this.invalidClientId = true;
    }
    console.log(this.data);
  }

  assignSiteId(event):void{
    if(Number.parseInt(event.target.value)){
      this.invalidSiteId = false;
      this.data.SiteId = event.target.value;
    }else {
      this.invalidSiteId = true;
    }    
  }

  ngOnInit(): void {
    this.getClientList();
    this.getSiteList();
  }

  addClient(event: Event): any{
    console.log('the option selected chnage detection'+event.target);
  }

  private getClientList(): any{
    this.clientService.getAll().subscribe(
      (data)=> {this.clients = data;
        console.log(data);
      },
      (error)=> console.log(error),
      ()=>console.log(this.clients));
  }

  private getSiteList(): any{
    this.siteService.getList().subscribe({
      next:(data)=> {
        console.log(data);
        this.sites = data},
      error:(error)=>console.log(error),
      complete:()=> console.log(this.sites)      
    });
  }

  //submit function
  public takeContractSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
        this.AddTC();
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