import { Component, OnInit } from '@angular/core';
import { MaterialBought } from './../../../../entity/models/Material/material-bought';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materialboughtcreate',
  templateUrl: './materialboughtcreate.component.html',
  styleUrls: ['./materialboughtcreate.component.css']
})
export class MaterialboughtcreateComponent implements OnInit {
  materialBought: MaterialBought=new MaterialBought();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New MB";

  materialBoughtSubmit(form:NgForm){
    console.log(form);
    
  }

}
