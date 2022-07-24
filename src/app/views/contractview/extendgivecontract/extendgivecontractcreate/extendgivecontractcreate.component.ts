import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ExtendGiveContract } from './../../../../entity/models/Contract/extend-give-contract';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ExtendGiveContractTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-extendgivecontractcreate',
  templateUrl: './extendgivecontractcreate.component.html',
  styleUrls: ['./extendgivecontractcreate.component.css']
})
export class ExtendgivecontractcreateComponent implements OnInit {
  title: any = ExtendGiveContractTitle.Create;
  data:ExtendGiveContract= new ExtendGiveContract();
  egcForm: FormGroup;
  constructor(private genericModalPopUpService:GenericModalPopUpService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  onExtendGivecontractSubmit(form:NgForm){
    console.log(form);
  }
}


// data: Client= new Client();
//   clientformvalid:FormGroup;