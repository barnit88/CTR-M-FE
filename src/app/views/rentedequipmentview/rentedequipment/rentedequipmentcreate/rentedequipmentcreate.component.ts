import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentedEquipment } from 'src/app/entity/models/RentedEquipment/rented-equipment';

@Component({
  selector: 'app-rentedequipmentcreate',
  templateUrl: './rentedequipmentcreate.component.html',
  styleUrls: ['./rentedequipmentcreate.component.css']
})
export class RentedequipmentcreateComponent implements OnInit {
  rentedEquipment : RentedEquipment =new RentedEquipment();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Craete New RE"
  rentedEquipmentSubmit(form:NgForm){}
}
