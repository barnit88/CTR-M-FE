import { Component, OnInit } from '@angular/core';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materialusedcreate',
  templateUrl: './materialusedcreate.component.html',
  styleUrls: ['./materialusedcreate.component.css']
})
export class MaterialusedcreateComponent implements OnInit {
  materialUsed: MaterialUsed= new MaterialUsed();
  title:string="Create New MU";

  constructor() { }

  ngOnInit(): void {
  }
  materialUsedSubmit(form:NgForm){
    console.log(form);
    
  }

}
