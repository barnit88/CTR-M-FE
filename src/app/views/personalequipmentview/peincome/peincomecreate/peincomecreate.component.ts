import { Component, OnInit } from '@angular/core';
import { PEIncome } from './../../../../entity/models/PersonalEquipment/peincome';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PEIncomeService } from './../../../../services/api-service/PersonalEquipmentService/peincome.service';
import { PEIncomeTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-peincomecreate',
  templateUrl: './peincomecreate.component.html',
  styleUrls: ['./peincomecreate.component.css']
})
export class PeincomecreateComponent implements OnInit {
  data:PEIncome;
  title:PEIncomeTitle.Create;


  constructor(private modelRef: BsModalRef,
    private peIncomeService:PEIncomeService) { }

  ngOnInit(): void {
  }
  public peIncomeSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPEIncome();
    } else {
      this.UpdatePEIncome();
    }
    this.modelRef.hide();
  }
  private AddPEIncome(): void{
    this.peIncomeService.addPEIncome(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePEIncome(): void{
    this.peIncomeService.peiUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
