import { Component, OnInit } from '@angular/core';
import { PvboughtcreateComponent } from './../pvboughtcreate/pvboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-pvboughtlist',
  templateUrl: './pvboughtlist.component.html',
  styleUrls: ['./pvboughtlist.component.css']
})
export class PvboughtlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Bought List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvboughtcreateComponent, {
      title: 'Create New PV Bought',
    });
  }
}
