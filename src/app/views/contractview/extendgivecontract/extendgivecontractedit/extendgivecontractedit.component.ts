import { Component, OnInit } from '@angular/core';
import { ExtendGiveContractTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-extendgivecontractedit',
  templateUrl: './extendgivecontractedit.component.html',
  styleUrls: ['./extendgivecontractedit.component.css']
})
export class ExtendgivecontracteditComponent implements OnInit {
  title: any = ExtendGiveContractTitle.Edit;


  constructor() { }

  ngOnInit(): void {
  }

}
