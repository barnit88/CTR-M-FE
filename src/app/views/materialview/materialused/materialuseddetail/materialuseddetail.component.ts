import { Component, OnInit } from '@angular/core';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';

@Component({
  selector: 'app-materialuseddetail',
  templateUrl: './materialuseddetail.component.html',
  styleUrls: ['./materialuseddetail.component.css']
})
export class MaterialuseddetailComponent implements OnInit {
  title:string="Material Used List"
materialused:MaterialUsed= new MaterialUsed();
  constructor() { }

  ngOnInit(): void {
    console.log(this.materialused);
  }
  

}
