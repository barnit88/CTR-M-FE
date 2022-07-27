import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVExpenses } from './../../../../entity/models/PersonalVehicle/pvexpenses';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PVExpensesService } from 'src/app/services/api-service/PersonalVehicleService/pvexpenses.service';
import { PVExpensesTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-pvepensescreate',
  templateUrl: './pvepensescreate.component.html',
  styleUrls: ['./pvepensescreate.component.css']
})
export class PvepensescreateComponent implements OnInit {
  data:PVExpenses;
  title:PVExpensesTitle.Create;

  constructor(private modelRef: BsModalRef,
    private pvExpenseService: PVExpensesService) {}

  ngOnInit(): void {
  }
  
  public pvExpenseSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPVE();
    } else {
      this.UpdatePVE();
    }
    this.modelRef.hide(); 
  }
private AddPVE(): void{
  this.pvExpenseService.addPVExpenses(this.data).subscribe(
    (response)=> console.log('done with adding '+ response),
    (error)=> console.log(error));
}
private UpdatePVE(): void {
  this.pvExpenseService.pveUpdate(this.data.Id, this.data).subscribe(
    (response)=> console.log('done with update'+ response),
    (error)=> console.log(error));
}
}
