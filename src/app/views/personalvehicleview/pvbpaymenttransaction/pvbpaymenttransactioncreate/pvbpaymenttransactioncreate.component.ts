import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-pvbpaymenttransactioncreate',
  templateUrl: './pvbpaymenttransactioncreate.component.html',
  styleUrls: ['./pvbpaymenttransactioncreate.component.css']
})
export class PvbpaymenttransactioncreateComponent implements OnInit {
  title:string="Craete New PVBP"
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {
  }
  

}
