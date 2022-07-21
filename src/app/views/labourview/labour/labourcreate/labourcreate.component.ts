import { Component, OnInit } from '@angular/core';
import { Labour } from './../../../../entity/models/Labour/labour';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-labourcreate',
  templateUrl: './labourcreate.component.html',
  styleUrls: ['./labourcreate.component.css']
})
export class LabourcreateComponent implements OnInit {
  labourData: Labour= new Labour();
  labourformvalid : FormGroup
  title:string="Create New Labour"
  constructor(private formBuilder: FormBuilder,
    
    ) { }

  ngOnInit(): void {
    this.labourformvalid = this.formBuilder.nonNullable.group({
      "id":0,
    "FirstName": ["", Validators.required],
    "Middlename": ["", Validators.required],
    "Lastname": ["", Validators.required],
    "State": ["", Validators.required],
    "District": ["", Validators.required],
    "Munipality": ["", Validators.required],
    "ContactNo": ["", Validators.required],
    "Email": ["", Validators.required],
    "IdentityNo": ["", Validators.required],
    "IdentityType": ["", Validators.required],
    "EmployeeType": ["", Validators.required],
    "EmployeePayment": ["", Validators.required],
    "IsActive": ["", Validators.required],
    "DateOfBirth": ["", Validators.required],
    "UDF1":["", Validators.required],
    "UDF2":["", Validators.required]

    })
    console.log(this.labourData);
  }

  labourSubmit(form:NgForm){
    console.log(form);
  }

}
