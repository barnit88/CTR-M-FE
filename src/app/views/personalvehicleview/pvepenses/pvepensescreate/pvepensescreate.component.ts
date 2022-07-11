import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-pvepensescreate',
  templateUrl: './pvepensescreate.component.html',
  styleUrls: ['./pvepensescreate.component.css']
})
export class PvepensescreateComponent implements OnInit {
  title:string="Craete New PVE";
  constructor() {}

  ngOnInit(): void {
  }


}
