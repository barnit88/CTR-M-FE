import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentedVehicle } from 'src/app/entity/models/RentedVehicle/rented-vehicle';

@Component({
  selector: 'app-rentedvehiclecreate',
  templateUrl: './rentedvehiclecreate.component.html',
  styleUrls: ['./rentedvehiclecreate.component.css']
})
export class RentedvehiclecreateComponent implements OnInit {
  rentedVehicle : RentedVehicle = new RentedVehicle();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New RV"
  rentedVehicleSubmit(from:NgForm){}
}
