import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Client } from 'src/app/entity/models/Client/client';
import { IComponent } from '../../IComponent';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit,IComponent<Client> {
  title: string;
  data: Client;
  constructor() {}

  ngOnInit(): void {
    console.log(this.title, this.data)
  }

}
