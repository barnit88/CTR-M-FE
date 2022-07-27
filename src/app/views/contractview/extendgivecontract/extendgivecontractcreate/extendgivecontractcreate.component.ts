import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ExtendGiveContract } from './../../../../entity/models/Contract/extend-give-contract';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ExtendGiveContractTitle } from 'src/app/entity/Enum/Enums';
import { IComponent } from 'src/app/views/IComponent';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ExtendGiveContractService } from './../../../../services/api-service/ContractService/extend-give-contract.service';

@Component({
  selector: 'app-extendgivecontractcreate',
  templateUrl: './extendgivecontractcreate.component.html',
  styleUrls: ['./extendgivecontractcreate.component.css']
})
export class ExtendgivecontractcreateComponent implements OnInit,IComponent<ExtendGiveContract> {
  title: ExtendGiveContractTitle.Create;
  data:ExtendGiveContract;

  constructor(private genericModalPopUpService:GenericModalPopUpService,
    private fb: FormBuilder,
    private modelRef: BsModalRef,
    private extendGiveContractService: ExtendGiveContractService) { }

  ngOnInit(): void {
  }


  public extendGiveContractSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddEGC();
    } else {
      this.UpdateEGC();
    }
    this.modelRef.hide();
  }
  private AddEGC(): void {
    this.extendGiveContractService.addExtendGiveContract(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error));
  }
  private UpdateEGC(): void {
    this.extendGiveContractService.updateExtendGiveContract(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
}


// data: Client= new Client();
//   clientformvalid:FormGroup;