import { Component, OnInit } from '@angular/core';
import { LaboursitecreateComponent } from './../laboursitecreate/laboursitecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-laboursitelist',
  templateUrl: './laboursitelist.component.html',
  styleUrls: ['./laboursitelist.component.css']
})
export class LaboursitelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'labour Site List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(LaboursitecreateComponent, {
      title: 'Create New Labour Site',
    });
  }
}
