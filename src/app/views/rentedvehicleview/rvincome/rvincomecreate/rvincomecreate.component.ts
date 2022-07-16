import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVIncome } from 'src/app/entity/models/RentedVehicle/rvincome';
@Component({
  selector: 'app-rvincomecreate',
  templateUrl: './rvincomecreate.component.html',
  styleUrls: ['./rvincomecreate.component.css']
})
export class RvincomecreateComponent implements OnInit {
  rvIncome : RVIncome = new RVIncome ();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New RVI"
  rvIncomeSubmit(form:NgForm){}
}
