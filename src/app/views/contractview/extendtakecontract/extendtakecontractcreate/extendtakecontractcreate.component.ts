import { Component, OnInit } from '@angular/core';
import { ExtendTakeContract } from './../../../../entity/models/Contract/extend-take-contract';
import { FormGroup } from '@angular/forms';
import { ExtendTakeContractTitle } from 'src/app/entity/Enum/Enums';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ExtendTakeContractService } from './../../../../services/api-service/ContractService/extend-take-contract.service';

@Component({
  selector: 'app-extendtakecontractcreate',
  templateUrl: './extendtakecontractcreate.component.html',
  styleUrls: ['./extendtakecontractcreate.component.css']
})
export class ExtendtakecontractcreateComponent implements OnInit {
  data: ExtendTakeContract;
  title:ExtendTakeContractTitle.Create;
  constructor(private modelRef: BsModalRef,
    private extendTakeContractService: ExtendTakeContractService) { }

  ngOnInit(): void {
  }
  
  public extendTakeContractSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddETC();
    } else {
      this.UpdateETC();
    }
    this.modelRef.hide();
  }
  private AddETC(): void {
    this.extendTakeContractService.addExtendTakeContract(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error));
  }
  private UpdateETC(): void {
    this.extendTakeContractService.updateExtendTakeContract(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
