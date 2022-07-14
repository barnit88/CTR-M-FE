import { Component, OnInit } from '@angular/core';
import { Labour } from './../../../../entity/models/Labour/labour';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-labourcreate',
  templateUrl: './labourcreate.component.html',
  styleUrls: ['./labourcreate.component.css']
})
export class LabourcreateComponent implements OnInit {
  labour: Labour= new Labour();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New Labour"

  labourSubmit(form:NgForm){
    console.log(form);
  }

}
