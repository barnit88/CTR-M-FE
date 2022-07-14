import { Component, OnInit } from '@angular/core';
import { MaterialStock } from './../../../../entity/models/Material/material-stock';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-materialstockcreate',
  templateUrl: './materialstockcreate.component.html',
  styleUrls: ['./materialstockcreate.component.css']
})
export class MaterialstockcreateComponent implements OnInit {
  materialStock: MaterialStock= new MaterialStock();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New M.STOCK";
  materialStockSubmit(form:NgForm){
    console.log(form);
    
  }

}
