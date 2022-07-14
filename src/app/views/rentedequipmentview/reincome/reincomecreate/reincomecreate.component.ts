import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { REIncome } from 'src/app/entity/models/RentedEquipment/reincome';

@Component({
  selector: 'app-reincomecreate',
  templateUrl: './reincomecreate.component.html',
  styleUrls: ['./reincomecreate.component.css']
})
export class ReincomecreateComponent implements OnInit {
reIncome : REIncome = new REIncome();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New REI"
  reIncomeSubmit(form:NgForm){}
}
