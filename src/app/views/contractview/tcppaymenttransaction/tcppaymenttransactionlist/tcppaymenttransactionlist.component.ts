import { Component, OnInit } from '@angular/core';
import { TcppaymenttransactioncreateComponent } from './../tcppaymenttransactioncreate/tcppaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-tcppaymenttransactionlist',
  templateUrl: './tcppaymenttransactionlist.component.html',
  styleUrls: ['./tcppaymenttransactionlist.component.css']
})
export class TcppaymenttransactionlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Take Contract Transactions Payments';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(TcppaymenttransactioncreateComponent, {
      title: 'Create TCP Payment',
    });
  }

}
