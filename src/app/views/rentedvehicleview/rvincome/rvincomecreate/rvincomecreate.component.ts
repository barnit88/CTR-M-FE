import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentedVehicleTitle } from 'src/app/entity/Enum/Enums';
import { RVIncome } from 'src/app/entity/models/RentedVehicle/rvincome';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RVIncomeService } from './../../../../services/api-service/RentedVehicleService/rvincome.service';
@Component({
  selector: 'app-rvincomecreate',
  templateUrl: './rvincomecreate.component.html',
  styleUrls: ['./rvincomecreate.component.css']
})
export class RvincomecreateComponent implements OnInit {
  data:RVIncome;
  title:RentedVehicleTitle.Create;

  constructor(private modelRef: BsModalRef,
    private rvIncomeService: RVIncomeService) { }

  ngOnInit(): void {
  }
  
  public rvIncomeSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRVI();
    } else {
      this.UpdateRVI();
    }
    this.modelRef.hide();
  }

  private AddRVI(): void{
    this.rvIncomeService.addRVIncome(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }

  private UpdateRVI(): void {
    this.rvIncomeService.rviUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
