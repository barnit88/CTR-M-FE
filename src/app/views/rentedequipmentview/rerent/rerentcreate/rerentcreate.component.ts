import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RERent } from 'src/app/entity/models/RentedEquipment/rerent';

@Component({
  selector: 'app-rerentcreate',
  templateUrl: './rerentcreate.component.html',
  styleUrls: ['./rerentcreate.component.css']
})
export class RerentcreateComponent implements OnInit {
reRent : RERent =new RERent();
  constructor() { }

  ngOnInit(): void {
  }
  title:string;
  reRentSubmit(form:NgForm){}
}
