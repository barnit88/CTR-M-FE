import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-pvincomecreate',
  templateUrl: './pvincomecreate.component.html',
  styleUrls: ['./pvincomecreate.component.css']
})
export class PvincomecreateComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  title:string="Craete New PVI"

}
