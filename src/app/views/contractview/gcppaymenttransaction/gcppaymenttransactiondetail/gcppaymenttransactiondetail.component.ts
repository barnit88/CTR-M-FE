import { Component, OnInit } from '@angular/core';
import { GcppaymenttransactioneditComponent } from '../gcppaymenttransactionedit/gcppaymenttransactionedit.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-gcppaymenttransactiondetail',
  templateUrl: './gcppaymenttransactiondetail.component.html',
  styleUrls: ['./gcppaymenttransactiondetail.component.css']
})
export class GcppaymenttransactiondetailComponent implements OnInit {
  title="Give Contract Payment Transaction"
  constructor(private genericDetailPopUpService: GenericDetailPopUpService, private genericModalPopUpService: GenericModalPopUpService) { }

  ngOnInit(): void {
  }

  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(GcppaymenttransactioneditComponent,{
      title:"Client details"
    });
  }
  
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(GcppaymenttransactioneditComponent, {
      title: 'Clent Create',
    });
  }

}
