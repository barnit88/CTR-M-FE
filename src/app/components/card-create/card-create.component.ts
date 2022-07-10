import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.css'],
})
export class CardCreateComponent implements OnInit {
  @Input() title = '';
  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {}
}
