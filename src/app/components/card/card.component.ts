import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title = 'Add title Here';
  @Output() popUp = new EventEmitter();

  constructor(public modalService: BsModalService) {}

  ngOnInit(): void {}

  link: string = 'vendor';

  emitEventForModalPopUp(event: any) {
    this.popUp.emit(event);
  }
}
