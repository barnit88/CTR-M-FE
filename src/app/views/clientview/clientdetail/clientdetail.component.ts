import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ClientTitle } from 'src/app/entity/Enum/Enums';
import { Client } from 'src/app/entity/models/Client/client';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit {
  data: Client;
  title: any = ClientTitle.Detail;
  constructor() {}

  ngOnInit(): void {
  }

}
