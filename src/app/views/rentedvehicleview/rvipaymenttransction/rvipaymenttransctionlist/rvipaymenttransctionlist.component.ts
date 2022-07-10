import { Component, OnInit } from '@angular/core';
import { RvipaymenttransctioncreateComponent } from './../rvipaymenttransctioncreate/rvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rvipaymenttransctionlist',
  templateUrl: './rvipaymenttransctionlist.component.html',
  styleUrls: ['./rvipaymenttransctionlist.component.css']
})
export class RvipaymenttransctionlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Income PaymentList';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvipaymenttransctioncreateComponent, {
      title: 'Create New RVI PAyment',
    });
  }
}
