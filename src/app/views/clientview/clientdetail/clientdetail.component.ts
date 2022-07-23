import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Client } from 'src/app/entity/models/Client/client';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit {
  data: any;
  title: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.title, this.data)
  }

}
