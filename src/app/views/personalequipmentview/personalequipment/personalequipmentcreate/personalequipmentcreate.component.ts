import { Component, OnInit } from '@angular/core';
import { PersonalEquipment } from './../../../../entity/models/PersonalEquipment/personal-equipment';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PersonalEquipmentService } from './../../../../services/api-service/PersonalEquipmentService/personal-equipment.service';
import { PersonalEquipmentTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-personalequipmentcreate',
  templateUrl: './personalequipmentcreate.component.html',
  styleUrls: ['./personalequipmentcreate.component.css']
})
export class PersonalequipmentcreateComponent implements OnInit {
  data: PersonalEquipment;
  title:PersonalEquipmentTitle.Create;

  constructor(private modelRef: BsModalRef,
    private personalEquipmentService: PersonalEquipmentService) { }

  ngOnInit(): void {
  }
  public personalEquipementSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPE();
    } else {
      this.UpdatePE();
    }
    this.modelRef.hide();
  }
  private AddPE(): void{
    this.personalEquipmentService.addPersonalEquipment(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePE(): void{
    this.personalEquipmentService.peUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }



}
