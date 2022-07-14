import { Component, OnInit } from '@angular/core';
import { MaterialSold } from './../../../../entity/models/Material/material-sold';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materialsoldcreate',
  templateUrl: './materialsoldcreate.component.html',
  styleUrls: ['./materialsoldcreate.component.css']
})
export class MaterialsoldcreateComponent implements OnInit {
  materialSold: MaterialSold= new MaterialSold();
  title: any = 'Material Sold Create';
  data: any;
  constructor() { }

  ngOnInit(): void {
  }
  materialSoldSubmit(form:NgForm){
    console.log(form);
    
  }

}
