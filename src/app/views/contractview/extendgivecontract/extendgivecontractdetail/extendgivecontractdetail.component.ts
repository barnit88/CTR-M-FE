import { Component, OnInit } from '@angular/core';
import { ExtendGiveContractTitle } from 'src/app/entity/Enum/Enums';
import { ExtendGiveContract } from 'src/app/entity/models/Contract/extend-give-contract';
import { IComponent } from 'src/app/views/IComponent';

@Component({
  selector: 'app-extendgivecontractdetail',
  templateUrl: './extendgivecontractdetail.component.html',
  styleUrls: ['./extendgivecontractdetail.component.css']
})
export class ExtendgivecontractdetailComponent implements OnInit,IComponent<ExtendGiveContract> {

  constructor() { }

  title: string;
  data: ExtendGiveContract | ExtendGiveContract[];

  ngOnInit(): void {
  }

}
