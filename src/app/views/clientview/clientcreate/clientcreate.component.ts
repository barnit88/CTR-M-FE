import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/entity/models/Client/client';

@Component({
  selector: 'app-clientcreate',
  templateUrl: './clientcreate.component.html',
  styleUrls: ['./clientcreate.component.css'],
})
export class ClientcreateComponent implements OnInit {
  title: any = 'Client Create';
  data: any;
  client: Client= new Client()
  constructor() {}

  ngOnInit(): void {}

 
}
