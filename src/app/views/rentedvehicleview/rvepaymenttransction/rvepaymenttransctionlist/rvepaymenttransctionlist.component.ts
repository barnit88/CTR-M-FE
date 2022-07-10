import { Component, OnInit } from '@angular/core';
import { RvepaymenttransctioncreateComponent } from './../rvepaymenttransctioncreate/rvepaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rvepaymenttransctionlist',
  templateUrl: './rvepaymenttransctionlist.component.html',
  styleUrls: ['./rvepaymenttransctionlist.component.css']
})
export class RvepaymenttransctionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvepaymenttransctioncreateComponent, {
      title: 'Create New RVE',
    });
  }
}
