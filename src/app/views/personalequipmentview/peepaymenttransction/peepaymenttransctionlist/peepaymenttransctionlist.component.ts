import { Component, OnInit } from '@angular/core';
import { PeepaymenttransctioncreateComponent } from './../peepaymenttransctioncreate/peepaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-peepaymenttransctionlist',
  templateUrl: './peepaymenttransctionlist.component.html',
  styleUrls: ['./peepaymenttransctionlist.component.css']
})
export class PeepaymenttransctionlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PEE Payemnt Transction List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PeepaymenttransctioncreateComponent, {
      title: 'Create New PEE Payment',
    });
  }
}
