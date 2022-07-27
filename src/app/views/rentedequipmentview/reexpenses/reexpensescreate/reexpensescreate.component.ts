import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { REExpenses } from 'src/app/entity/models/RentedEquipment/reexpenses';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { REExpensesService } from 'src/app/services/api-service/RentedEquipmentService/reexpenses.service';
import { REExpensesTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-reexpensescreate',
  templateUrl: './reexpensescreate.component.html',
  styleUrls: ['./reexpensescreate.component.css']
})
export class ReexpensescreateComponent implements OnInit {
  data: REExpenses;
  title:REExpensesTitle.Create;
  constructor(private modelRef: BsModalRef,
    private reExpenseService: REExpensesService) { }

  ngOnInit(): void {
  }
  
  public reExpenseSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddREE();
    } else {
      this.UpdateREE();
    }
    this.modelRef.hide(); 
  }
private AddREE(): void{
  this.reExpenseService.addREExpenses(this.data).subscribe(
    (response)=> console.log('done with adding '+ response),
    (error)=> console.log(error));
}
private UpdateREE(): void {
  this.reExpenseService.reExpenseUpdate(this.data.Id, this.data).subscribe(
    (response)=> console.log('done with update'+ response),
    (error)=> console.log(error));
}
}
