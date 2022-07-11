import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-detail-card',
  templateUrl: './list-detail-card.component.html',
  styleUrls: ['./list-detail-card.component.css'],
})
export class ListDetailCardComponent implements OnInit {
  @Input() title = '';

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {}
}
