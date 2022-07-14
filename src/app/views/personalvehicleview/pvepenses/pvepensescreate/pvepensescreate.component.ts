import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVExpenses } from './../../../../entity/models/PersonalVehicle/pvexpenses';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pvepensescreate',
  templateUrl: './pvepensescreate.component.html',
  styleUrls: ['./pvepensescreate.component.css']
})
export class PvepensescreateComponent implements OnInit {
  pvExpense: PVExpenses= new PVExpenses();
  title:string="Craete New PVE";
  constructor() {}

  ngOnInit(): void {
  }
  pvExpenseSubmit(form:NgForm){
    console.log(form);
    
  }

}
