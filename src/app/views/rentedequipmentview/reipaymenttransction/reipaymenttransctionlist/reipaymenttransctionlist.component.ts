import { Component, OnInit } from '@angular/core';
import { ReipaymenttransctioncreateComponent } from './../reipaymenttransctioncreate/reipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-reipaymenttransctionlist',
  templateUrl: './reipaymenttransctionlist.component.html',
  styleUrls: ['./reipaymenttransctionlist.component.css']
})
export class ReipaymenttransctionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Income Payment Transaction';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ReipaymenttransctioncreateComponent, {
      title: 'Create New REI Payment',
    });
  }

}
