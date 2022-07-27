import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVExpenses } from 'src/app/entity/models/RentedVehicle/rvexpenses';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RVExpensesService } from './../../../../services/api-service/RentedVehicleService/rvexpenses.service';
import { RVExpensesTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-rvexpensescreate',
  templateUrl: './rvexpensescreate.component.html',
  styleUrls: ['./rvexpensescreate.component.css']
})
export class RvexpensescreateComponent implements OnInit {
  data:RVExpenses;
  title:RVExpensesTitle.Create;

  constructor(private modelRef: BsModalRef,
    private rvExpensesService: RVExpensesService) { }

  ngOnInit(): void {
  }

  public rvExpenseSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRVE();
    } else {
      this.UpdateRVE();
    }
    this.modelRef.hide();
  }

  private AddRVE(): void{
    this.rvExpensesService.addRVExpenses(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateRVE(): void {
    this.rvExpensesService.rveUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
