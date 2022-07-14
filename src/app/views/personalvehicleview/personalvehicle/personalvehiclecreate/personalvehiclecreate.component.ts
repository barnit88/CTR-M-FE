import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalVehicle } from './../../../../entity/models/PersonalVehicle/personal-vehicle';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-personalvehiclecreate',
  templateUrl: './personalvehiclecreate.component.html',
  styleUrls: ['./personalvehiclecreate.component.css']
})
export class PersonalvehiclecreateComponent implements OnInit {
  personalVehicle: PersonalVehicle= new PersonalVehicle();
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {
    
  }
  title: string = "Create New PV"
  personalVehicleSubmit(form:NgForm){
    console.log(form);
  }
 
  }
