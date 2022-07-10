import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';


@Component({
  selector: 'app-extendgivecontractlist',
  templateUrl: './extendgivecontractlist.component.html',
  styleUrls: ['./extendgivecontractlist.component.css']
})
export class ExtendgivecontractlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Client List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ExtendgivecontractlistComponent, {
      title: 'Create Client',
    });
  }
}
