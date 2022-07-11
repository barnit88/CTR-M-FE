import { Component, OnInit } from '@angular/core';
import { GenericDetailPopUpService } from './../../../../services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-tcppaymenttransactioncreate',
  templateUrl: './tcppaymenttransactioncreate.component.html',
  styleUrls: ['./tcppaymenttransactioncreate.component.css']
})
export class TcppaymenttransactioncreateComponent implements OnInit {
  title: any = 'Take Contract Payment Transaction Create';
  data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
