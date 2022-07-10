import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { TakecontractcreateComponent } from '../takecontractcreate/takecontractcreate.component';
import { TakeContract } from './../../../../entity/models/Contract/take-contract';
@Component({
  selector: 'app-takecontractlist',
  templateUrl: './takecontractlist.component.html',
  styleUrls: ['./takecontractlist.component.css']
})
export class TakecontractlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Take Contract List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(TakecontractcreateComponent, {
      title: 'Create Client',
    });
  }

}
