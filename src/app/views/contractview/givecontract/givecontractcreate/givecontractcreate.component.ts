import { Component, OnInit } from '@angular/core';
import { GiveContract } from './../../../../entity/models/Contract/give-contract';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-givecontractcreate',
  templateUrl: './givecontractcreate.component.html',
  styleUrls: ['./givecontractcreate.component.css']
})
export class GivecontractcreateComponent implements OnInit {
  title: any = 'Give Contract Create';
  giveContract: GiveContract= new GiveContract();
  data: any;
  constructor() { }

  ngOnInit(): void {
  }
  giveContractSubmit(form:NgForm){
    console.log(form);
}
}
