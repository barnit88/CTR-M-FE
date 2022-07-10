import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-extendgivecontractcreate',
  templateUrl: './extendgivecontractcreate.component.html',
  styleUrls: ['./extendgivecontractcreate.component.css']
})
export class ExtendgivecontractcreateComponent implements OnInit {

  constructor(private genericModalPopUpService:GenericModalPopUpService) { }

  ngOnInit(): void {
  }
  title:string="Extend Give Contract List"
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ExtendgivecontractcreateComponent, {
      title: 'Create Extend Give Contract',
    });
  }

}
