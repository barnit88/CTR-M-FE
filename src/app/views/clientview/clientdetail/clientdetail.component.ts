import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit {
  title: any = 'Client Details';
  data: any;

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}
