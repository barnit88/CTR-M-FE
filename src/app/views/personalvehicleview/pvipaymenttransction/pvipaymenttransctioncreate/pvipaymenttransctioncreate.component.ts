import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-pvipaymenttransctioncreate',
  templateUrl: './pvipaymenttransctioncreate.component.html',
  styleUrls: ['./pvipaymenttransctioncreate.component.css']
})
export class PvipaymenttransctioncreateComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
  title:string="Craete New PVIP"
}