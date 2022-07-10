import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialcreateComponent } from './../materialcreate/materialcreate.component';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css']
})
export class MateriallistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(MaterialcreateComponent, {
      title: 'Create New Material',
    });
  }
}
