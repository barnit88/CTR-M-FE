import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVExpenses } from 'src/app/entity/models/RentedVehicle/rvexpenses';

@Component({
  selector: 'app-rvexpensescreate',
  templateUrl: './rvexpensescreate.component.html',
  styleUrls: ['./rvexpensescreate.component.css']
})
export class RvexpensescreateComponent implements OnInit {
  rvExpenses : RVExpenses = new RVExpenses
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New RVE"
  rvExpensesSubmit(form:NgForm) {}
}
