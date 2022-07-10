import { Component, OnInit } from '@angular/core';
import { PvincomecreateComponent } from './../pvincomecreate/pvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-pvincomelist',
  templateUrl: './pvincomelist.component.html',
  styleUrls: ['./pvincomelist.component.css']
})
export class PvincomelistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvincomecreateComponent, {
      title: 'Create New PVI',
    });
  }
}
