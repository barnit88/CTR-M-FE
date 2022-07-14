import { Component, OnInit } from '@angular/core';
import { PEExpenses } from './../../../../entity/models/PersonalEquipment/peexpenses';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-peexpensescreate',
  templateUrl: './peexpensescreate.component.html',
  styleUrls: ['./peexpensescreate.component.css']
})
export class PeexpensescreateComponent implements OnInit {
  peExpense: PEExpenses= new PEExpenses();

  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New PEE"

  peExpenseSubmit(form:NgForm){
    console.log(form);
  }

}
