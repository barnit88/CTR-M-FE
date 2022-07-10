import { Component, OnInit } from '@angular/core';
import { PeboughtcreateComponent } from './../peboughtcreate/peboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-peboughtlist',
  templateUrl: './peboughtlist.component.html',
  styleUrls: ['./peboughtlist.component.css']
})
export class PeboughtlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PE Bought List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PeboughtcreateComponent, {
      title: 'Create New PE Bought',
    });
  }

}
