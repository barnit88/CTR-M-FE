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
  
  constructor(public modalService: BsModalService) {}

  @Input() title: string="";
  @Output() popUp = new EventEmitter();

  PlaceHolder : string = `Search`;


  ngOnInit(): void {}


  emitEventForModalPopUp(event: any) {
    this.popUp.emit(event);
  }
}
