import { Component, OnInit } from '@angular/core';
import { RerentcreateComponent } from './../rerentcreate/rerentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rerentlist',
  templateUrl: './rerentlist.component.html',
  styleUrls: ['./rerentlist.component.css']
})
export class RerentlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Rent List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RerentcreateComponent, {
      title: 'Rented Equipment Create',
    });
  }

}
