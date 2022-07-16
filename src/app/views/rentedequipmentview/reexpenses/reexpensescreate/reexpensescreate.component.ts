import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { REExpenses } from 'src/app/entity/models/RentedEquipment/reexpenses';

@Component({
  selector: 'app-reexpensescreate',
  templateUrl: './reexpensescreate.component.html',
  styleUrls: ['./reexpensescreate.component.css']
})
export class ReexpensescreateComponent implements OnInit {
  reeExpenses: REExpenses = new REExpenses();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New RE"
  reExpenseSubmit(form:NgForm){}

}
