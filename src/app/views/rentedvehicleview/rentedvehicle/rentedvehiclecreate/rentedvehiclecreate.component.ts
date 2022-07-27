import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentedVehicle } from 'src/app/entity/models/RentedVehicle/rented-vehicle';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RentedVehicleService } from './../../../../services/api-service/RentedVehicleService/rented-vehicle.service';
import { RentedVehicleTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-rentedvehiclecreate',
  templateUrl: './rentedvehiclecreate.component.html',
  styleUrls: ['./rentedvehiclecreate.component.css']
})
export class RentedvehiclecreateComponent implements OnInit {
  data:RentedVehicle;
  title:RentedVehicleTitle.Create;

  constructor(private modelRef: BsModalRef,
    private rentedVehicleService: RentedVehicleService) { }

  ngOnInit(): void {
  }

  public rentedVehicleSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRV();
    } else {
      this.UpdateRv();
    }
    this.modelRef.hide();
  }

  private AddRV(): void{
    this.rentedVehicleService.addRentedVehicle(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateRv(): void {
    this.rentedVehicleService.rvUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
