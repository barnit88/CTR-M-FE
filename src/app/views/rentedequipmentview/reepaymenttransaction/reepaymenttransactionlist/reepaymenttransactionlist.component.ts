import { Component, OnInit } from '@angular/core';
import { ReepaymenttransactioncreateComponent } from './../reepaymenttransactioncreate/reepaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-reepaymenttransactionlist',
  templateUrl: './reepaymenttransactionlist.component.html',
  styleUrls: ['./reepaymenttransactionlist.component.css']
})
export class ReepaymenttransactionlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'REE PAyment Transaction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ReepaymenttransactioncreateComponent, {
      title: 'Create New REE Payment',
    });
  }

}
