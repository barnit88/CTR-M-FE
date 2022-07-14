import { Component, OnInit } from '@angular/core';
import { PersonalEquipment } from './../../../../entity/models/PersonalEquipment/personal-equipment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personalequipmentcreate',
  templateUrl: './personalequipmentcreate.component.html',
  styleUrls: ['./personalequipmentcreate.component.css']
})
export class PersonalequipmentcreateComponent implements OnInit {
  personalEquipment: PersonalEquipment= new PersonalEquipment();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New PE";

 public personalEquipementSubmit(form:NgForm){
    console.log(form);
  }


}
