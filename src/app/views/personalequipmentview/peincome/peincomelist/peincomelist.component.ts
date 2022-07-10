import { Component, OnInit } from '@angular/core';
import { PeincomecreateComponent } from './../peincomecreate/peincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-peincomelist',
  templateUrl: './peincomelist.component.html',
  styleUrls: ['./peincomelist.component.css']
})
export class PeincomelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PE Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PeincomecreateComponent, {
      title: 'Create New PE Income',
    });
  }

}
