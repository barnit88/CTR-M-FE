import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GivecontractcreateComponent } from './../givecontractcreate/givecontractcreate.component';
import { GivecontractdetailComponent } from './../givecontractdetail/givecontractdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-givecontractlist',
  templateUrl: './givecontractlist.component.html',
  styleUrls: ['./givecontractlist.component.css']
})
export class GivecontractlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Give Contract Lists';

  OpenModalPopUp() {
    // this.genericModalPopUpService.openModalPopUpService(GivecontractcreateComponent, {
    //   title: 'Create Give Contract',
    // });
  }
  OpenDetailPopUp() {
    // this.genericModalPopUpService.openModalPopUpService(GivecontractdetailComponent,{
    //   title:"Give Contract Details"
    // });
  }

}
