import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-pvboughtcreate',
  templateUrl: './pvboughtcreate.component.html',
  styleUrls: ['./pvboughtcreate.component.css']
})
export class PvboughtcreateComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}


  ngOnInit(): void {
  }
  title:string="Create New PVB"
}
