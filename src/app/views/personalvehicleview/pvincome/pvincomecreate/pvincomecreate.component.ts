import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PVIncome } from 'src/app/entity/models/PersonalVehicle/pvincome';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PVIncomeService } from 'src/app/services/api-service/PersonalVehicleService/pvincome.service';
import { PVIncomeTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-pvincomecreate',
  templateUrl: './pvincomecreate.component.html',
  styleUrls: ['./pvincomecreate.component.css']
})
export class PvincomecreateComponent implements OnInit {
  data:PVIncome;
  title:PVIncomeTitle.Create;

  constructor(private modelRef: BsModalRef,
    private pvIncomeService: PVIncomeService) {}

  ngOnInit(): void {
  }
  
  
  public pvIncomeSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPVI();
    } else {
      this.UpdatePVI();
    }
    this.modelRef.hide(); 
  }
private AddPVI(): void{
  this.pvIncomeService.addPVIncome(this.data).subscribe(
    (response)=> console.log('done with adding '+ response),
    (error)=> console.log(error));
}
private UpdatePVI(): void {
  this.pvIncomeService.pviUpdate(this.data.Id, this.data).subscribe(
    (response)=> console.log('done with update'+ response),
    (error)=> console.log(error));
}
}