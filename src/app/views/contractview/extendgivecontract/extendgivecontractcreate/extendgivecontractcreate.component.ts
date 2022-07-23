import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ExtendGiveContract } from './../../../../entity/models/Contract/extend-give-contract';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-extendgivecontractcreate',
  templateUrl: './extendgivecontractcreate.component.html',
  styleUrls: ['./extendgivecontractcreate.component.css']
})
export class ExtendgivecontractcreateComponent implements OnInit {
  extendGiveContract:ExtendGiveContract= new ExtendGiveContract();
  egcForm: FormGroup;
  title:string="Extend Give Contract List";
  constructor(private genericModalPopUpService:GenericModalPopUpService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  onExtendGivecontractSubmit(form:NgForm){
    console.log(form);
  }
}
