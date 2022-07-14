import { Component, OnInit } from '@angular/core';
import { Material } from './../../../../entity/models/Material/material';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materialcreate',
  templateUrl: './materialcreate.component.html',
  styleUrls: ['./materialcreate.component.css']
})
export class MaterialcreateComponent implements OnInit {
  material: Material= new Material();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New MC"

  materialSubmit(form:NgForm){
    console.log(form);
  }

}
