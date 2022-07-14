import { Component, OnInit } from '@angular/core';
import { ExtendTakeContract } from './../../../../entity/models/Contract/extend-take-contract';

@Component({
  selector: 'app-extendtakecontractcreate',
  templateUrl: './extendtakecontractcreate.component.html',
  styleUrls: ['./extendtakecontractcreate.component.css']
})
export class ExtendtakecontractcreateComponent implements OnInit {
  entendTakeContract: ExtendTakeContract=new ExtendTakeContract();
  title: any = 'Extend Take Contract Create';
  data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
