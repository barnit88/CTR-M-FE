import { Component, OnInit } from '@angular/core';
import { RvrpaymenttransctioncreateComponent } from './../rvrpaymenttransctioncreate/rvrpaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rvrpaymenttransctionlist',
  templateUrl: './rvrpaymenttransctionlist.component.html',
  styleUrls: ['./rvrpaymenttransctionlist.component.css']
})
export class RvrpaymenttransctionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Rent Payment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvrpaymenttransctioncreateComponent, {
      title: 'Create New RVR payment',
    });
  }
}
