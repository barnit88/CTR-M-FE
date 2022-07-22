import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/entity/models/Client/client';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../../services/api-service/ClientService/client.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-clientcreate',
  templateUrl: './clientcreate.component.html',
  styleUrls: ['./clientcreate.component.css'],
})
export class ClientcreateComponent implements OnInit {
  title: any = 'Client Create';
  clientData: Client= new Client();
  clientformvalid:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private clientService:ClientService,
    private modelRef: BsModalRef) {}

  ngOnInit(): void {
    this.clientformvalid = this.formBuilder.nonNullable.group({
      "id": 0,
    "firstName": ["", Validators.required],
    "MiddleName": ["", Validators.required],
    "LastName": ["", Validators.required],
    "State": ["", Validators.required],
    "District": ["", Validators.required],
    "Munipality": ["", Validators.required],
    "ContactNo": ["", Validators.required],
    "Email": ["", Validators.required],
    "IdentityNo": ["", Validators.required],
    "IdentityType": ["", Validators.required],
    "CLientCompanyName": ["", Validators.required],
    "CLientCompanyType": ["", Validators.required],
    "ClientCompanyContactNo": ["", Validators.required],
    "ClientCompanyIdentityType": ["", Validators.required],
    "ClientCompanyIdentityNumber": ["", Validators.required],
    "UDF1":["", Validators.required],
    "UDF2":["", Validators.required]
});
  }

  onSubmitTemplateBased(form:any): any{
    console.log("reactive form submitted");
    this.clientData = form;
    this.clientService.add(this.clientData).subscribe((response)=> console.log('Done Creating new client'),
    (error: any)=> console.log(error),
    );
    this.modelRef.hide();
    this.ngOnInit();
  }


 
}
