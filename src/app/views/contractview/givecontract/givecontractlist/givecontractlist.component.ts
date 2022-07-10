import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GivecontractcreateComponent } from './../givecontractcreate/givecontractcreate.component';

@Component({
  selector: 'app-givecontractlist',
  templateUrl: './givecontractlist.component.html',
  styleUrls: ['./givecontractlist.component.css']
})
export class GivecontractlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Give Contract Lists';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(GivecontractcreateComponent, {
      title: 'Create Give Contract',
    });
  }

}
