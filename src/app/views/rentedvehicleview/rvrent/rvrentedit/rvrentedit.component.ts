import { Component, OnInit } from '@angular/core';
import { RvrentcreateComponent } from './../rvrentcreate/rvrentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rvrentedit',
  templateUrl: './rvrentedit.component.html',
  styleUrls: ['./rvrentedit.component.css']
})
export class RvrenteditComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Rent List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvrentcreateComponent, {
      title: 'Create New RV Bought',
    });
  }
}
