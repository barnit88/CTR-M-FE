import { Component, OnInit } from '@angular/core';
import { PEExpenses } from './../../../../entity/models/PersonalEquipment/peexpenses';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PEExpensesService } from './../../../../services/api-service/PersonalEquipmentService/peexpenses.service';
import { PEExpensesTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-peexpensescreate',
  templateUrl: './peexpensescreate.component.html',
  styleUrls: ['./peexpensescreate.component.css']
})
export class PeexpensescreateComponent implements OnInit {
  data: PEExpenses;
  title:PEExpensesTitle.Create;

  constructor(private modelRef: BsModalRef,
    private peExpensesService: PEExpensesService) { }

  ngOnInit(): void {
  }
  public peExpenseSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPEExpense();
    } else {
      this.UpdatePEExpense();
    }
    this.modelRef.hide();
  }
  private AddPEExpense(): void{
    this.peExpensesService.addPEExpenses(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePEExpense(): void{
    this.peExpensesService.peeUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
