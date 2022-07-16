import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PVIncome } from 'src/app/entity/models/PersonalVehicle/pvincome';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-pvincomecreate',
  templateUrl: './pvincomecreate.component.html',
  styleUrls: ['./pvincomecreate.component.css']
})
export class PvincomecreateComponent implements OnInit {
  pvIncome : PVIncome = new PVIncome ();
  constructor() {}

  ngOnInit(): void {
  }
  title:string="Craete New PVI"
  pvIncomeSubmit(form:NgForm){}
}
