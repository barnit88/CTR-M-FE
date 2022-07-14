import { Component, OnInit } from '@angular/core';
import { PEIncome } from './../../../../entity/models/PersonalEquipment/peincome';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-peincomecreate',
  templateUrl: './peincomecreate.component.html',
  styleUrls: ['./peincomecreate.component.css']
})
export class PeincomecreateComponent implements OnInit {
  peIncome:PEIncome= new PEIncome();


  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New PEI"

  peIncomeSubmit(form:NgForm){
    console.log(form);
  }

}
