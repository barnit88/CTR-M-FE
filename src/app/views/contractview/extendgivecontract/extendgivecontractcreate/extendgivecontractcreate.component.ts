import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ExtendGiveContract } from './../../../../entity/models/Contract/extend-give-contract';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-extendgivecontractcreate',
  templateUrl: './extendgivecontractcreate.component.html',
  styleUrls: ['./extendgivecontractcreate.component.css']
})
export class ExtendgivecontractcreateComponent implements OnInit {
  extendGiveContract:ExtendGiveContract= new ExtendGiveContract();
  constructor(private genericModalPopUpService:GenericModalPopUpService) { }

  ngOnInit(): void {
  }
  title:string="Extend Give Contract List"
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ExtendgivecontractcreateComponent, {
      title: 'Create Extend Give Contract',
    });
  }

  onExtendGivecontractSubmit(form:NgForm){
    console.log(form);
  }
}
