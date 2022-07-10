import { Component, OnInit } from '@angular/core';
import { MaterialstockcreateComponent } from './../materialstockcreate/materialstockcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-materialstocklist',
  templateUrl: './materialstocklist.component.html',
  styleUrls: ['./materialstocklist.component.css']
})
export class MaterialstocklistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material Stock List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MaterialstockcreateComponent, {
      title: 'Create New Material Stock',
    });
  }
}
