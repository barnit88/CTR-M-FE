import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalVehicle } from './../../../../entity/models/PersonalVehicle/personal-vehicle';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PersonalVehicleService } from 'src/app/services/api-service/PersonalVehicleService/personal-vehicle.service';
import { PersonalVehicleTitle } from 'src/app/entity/Enum/Enums';
@Component({
  selector: 'app-personalvehiclecreate',
  templateUrl: './personalvehiclecreate.component.html',
  styleUrls: ['./personalvehiclecreate.component.css']
})
export class PersonalvehiclecreateComponent implements OnInit {
  data:PersonalVehicle;
  title:PersonalVehicleTitle.Create;

  constructor(private genericModalPopUpService: GenericModalPopUpService,
    private modelRef: BsModalRef,
    private personalVehicleService: PersonalVehicleService) {}

  ngOnInit(): void {
    
  }

  public personalVehicleSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPV();
    } else {
      this.UpdatePV();
    }
    this.modelRef.hide();
  }
  private AddPV(): void{
    this.personalVehicleService.addPersonalVehicle(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePV(): void{
    this.personalVehicleService.pvUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }
 
  }
