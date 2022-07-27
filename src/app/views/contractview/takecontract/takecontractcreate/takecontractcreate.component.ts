import { Component, OnInit } from '@angular/core';
import { TakeContract } from './../../../../entity/models/Contract/take-contract';
import { NgForm } from '@angular/forms';
import { TakeContractTitle } from 'src/app/entity/Enum/Enums';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { TakeContractService } from './../../../../services/api-service/ContractService/take-contract.service';

@Component({
  selector: 'app-takecontractcreate',
  templateUrl: './takecontractcreate.component.html',
  styleUrls: ['./takecontractcreate.component.css']
})
export class TakecontractcreateComponent implements OnInit {
  data:TakeContract;
  title:TakeContractTitle.Create
  
  constructor(private modelRef: BsModalRef,
    private takeContractService: TakeContractService) { }

  ngOnInit(): void {
  }

  public takeContractSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddTC();
    } else {
      this.UpdateTC();
    }
    this.modelRef.hide();
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
