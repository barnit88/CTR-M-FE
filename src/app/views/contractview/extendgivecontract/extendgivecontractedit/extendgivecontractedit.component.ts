import { Component, OnInit } from '@angular/core';
import { ExtendGiveContractTitle } from 'src/app/entity/Enum/Enums';
import { ExtendGiveContract } from 'src/app/entity/models/Contract/extend-give-contract';
import { IComponent } from 'src/app/views/IComponent';

@Component({
  selector: 'app-extendgivecontractedit',
  templateUrl: './extendgivecontractedit.component.html',
  styleUrls: ['./extendgivecontractedit.component.css']
})
export class ExtendgivecontracteditComponent implements OnInit,IComponent<ExtendGiveContract> {

  constructor() { }
  
  title: string;
  data: ExtendGiveContract | ExtendGiveContract[];

  ngOnInit(): void {
  }

}
