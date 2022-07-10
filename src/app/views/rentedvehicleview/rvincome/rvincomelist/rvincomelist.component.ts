import { Component, OnInit } from '@angular/core';
import { RvincomecreateComponent } from './../rvincomecreate/rvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-rvincomelist',
  templateUrl: './rvincomelist.component.html',
  styleUrls: ['./rvincomelist.component.css']
})
export class RvincomelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented vehicle Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(RvincomecreateComponent, {
      title: 'Create New RVI',
    });
  }
}
