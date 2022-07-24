import { Component, OnInit } from '@angular/core';
import { ClientTitle } from 'src/app/entity/Enum/Enums';
import { Client } from 'src/app/entity/models/Client/client';
import { IComponent } from '../../IComponent';

@Component({
  selector: 'app-clientedit',
  templateUrl: './clientedit.component.html',
  styleUrls: ['./clientedit.component.css']
})
export class ClienteditComponent implements OnInit,IComponent<Client> {
  title: any = ClientTitle.Edit;
  data: Client= new Client();
    constructor() { }

  ngOnInit(): void {
  }

}
