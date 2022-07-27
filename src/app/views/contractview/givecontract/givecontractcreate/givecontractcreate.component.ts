import { Component, OnInit } from '@angular/core';
import { GiveContract } from './../../../../entity/models/Contract/give-contract';
import { NgForm } from '@angular/forms';
import { GiveContractTitle } from 'src/app/entity/Enum/Enums';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GiveContractService } from './../../../../services/api-service/ContractService/give-contract.service';

@Component({
  selector: 'app-givecontractcreate',
  templateUrl: './givecontractcreate.component.html',
  styleUrls: ['./givecontractcreate.component.css']
})
export class GivecontractcreateComponent implements OnInit {
  title:GiveContractTitle.Create;
  data:GiveContract;
  
  constructor(private modelRef: BsModalRef,
    private giveContractService: GiveContractService) { }

  ngOnInit(): void {
  }
  
  public giveContractSubmit(): void{
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
