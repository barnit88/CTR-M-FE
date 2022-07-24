import { Component, OnInit } from '@angular/core';
import { ExtendGiveContractTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-extendgivecontractdetail',
  templateUrl: './extendgivecontractdetail.component.html',
  styleUrls: ['./extendgivecontractdetail.component.css']
})
export class ExtendgivecontractdetailComponent implements OnInit {
  title: any = ExtendGiveContractTitle.Detail;

  constructor() { }

  ngOnInit(): void {
  }

}
