import { Component, OnInit } from '@angular/core';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';

@Component({
  selector: 'app-materialuseddetail',
  templateUrl: './materialuseddetail.component.html',
  styleUrls: ['./materialuseddetail.component.css']
})
export class MaterialuseddetailComponent implements OnInit {
<<<<<<< Updated upstream
  title='Material Used Detail'
=======
  title:string="Material Used List"
materialused:MaterialUsed= new MaterialUsed();
>>>>>>> Stashed changes
  constructor() { }

  ngOnInit(): void {
    console.log(this.materialused);
  }
  

}
