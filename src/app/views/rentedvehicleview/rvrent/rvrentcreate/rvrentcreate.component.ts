import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RVRent } from 'src/app/entity/models/RentedVehicle/rvrent';

@Component({
  selector: 'app-rvrentcreate',
  templateUrl: './rvrentcreate.component.html',
  styleUrls: ['./rvrentcreate.component.css']
})
export class RvrentcreateComponent implements OnInit {
  rvRent : RVRent = new RVRent();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New RVR"
  rvRentSubmit(form:NgForm){}
}
