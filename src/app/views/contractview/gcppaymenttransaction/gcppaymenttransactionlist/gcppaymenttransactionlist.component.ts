import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-gcppaymenttransactionlist',
  templateUrl: './gcppaymenttransactionlist.component.html',
  styleUrls: ['./gcppaymenttransactionlist.component.css']
})
export class GcppaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Give Contract Transactions Payments';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(GcppaymenttransactionlistComponent, {
      title: 'Create Client',
    });
  }

}
