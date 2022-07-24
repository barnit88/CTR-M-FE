import { Component, OnInit } from '@angular/core';
import { ClientTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-clientedit',
  templateUrl: './clientedit.component.html',
  styleUrls: ['./clientedit.component.css']
})
export class ClienteditComponent implements OnInit {
  title: any = ClientTitle.Edit;
  constructor() { }

  ngOnInit(): void {
  }

}
