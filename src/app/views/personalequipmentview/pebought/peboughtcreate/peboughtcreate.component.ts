import { Component, OnInit } from '@angular/core';
import { PEBought } from './../../../../entity/models/PersonalEquipment/pebought';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-peboughtcreate',
  templateUrl: './peboughtcreate.component.html',
  styleUrls: ['./peboughtcreate.component.css']
})
export class PeboughtcreateComponent implements OnInit {
  peBought:PEBought= new PEBought();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New PEB"
  peBoughtSubmit(form:NgForm){
    console.log(form)
  }

}
