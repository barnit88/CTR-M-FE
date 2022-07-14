import { Component, OnInit } from '@angular/core';
import { TakeContract } from './../../../../entity/models/Contract/take-contract';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-takecontractcreate',
  templateUrl: './takecontractcreate.component.html',
  styleUrls: ['./takecontractcreate.component.css']
})
export class TakecontractcreateComponent implements OnInit {
  takeContract: TakeContract= new TakeContract();
  title: any = 'Take Contract Create';
  data: any;
  constructor() { }

  ngOnInit(): void {
  }

  takeContractSubmit(form:NgForm){
    console.log(form);
  }

}
