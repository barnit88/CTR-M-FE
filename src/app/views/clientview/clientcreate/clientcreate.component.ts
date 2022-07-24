import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/entity/models/Client/client';
import { HttpClient } from '@angular/common/http';
import { ClientService } from './../../../services/api-service/ClientService/client.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IComponent } from '../../IComponent';

@Component({
  selector: 'app-clientcreate',
  templateUrl: './clientcreate.component.html',
  styleUrls: ['./clientcreate.component.css'],
})
export class ClientcreateComponent implements OnInit, IComponent<Client> {
  public title :string;
  public data : Client;
  // clientformvalid: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private modelRef: BsModalRef
  ) {}

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.data);
    if(this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
      this.AddClient();
    }
    else{
      this.UpdateClient();
    }
    this.modelRef.hide();
  }

  private AddClient():void{
    var result = this.clientService.add(this.data).subscribe(
      (data) => {
        console.log("done with creating client "+data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  private UpdateClient():void{
    var result = this.clientService.update(this.data.Id,this.data).subscribe(
      response => {
        console.log('Update Sucessfully');
      },
      error =>{
        console.log('error');
      }
    )
  }
}
