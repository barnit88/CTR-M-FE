import { Component, OnInit } from '@angular/core';
import { PeepaymenttransctioncreateComponent } from './../peepaymenttransctioncreate/peepaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeepaymenttransctiondetailComponent } from './../peepaymenttransctiondetail/peepaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEEPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peepayment-transaction';
@Component({
  selector: 'app-peepaymenttransctionlist',
  templateUrl: './peepaymenttransctionlist.component.html',
  styleUrls: ['./peepaymenttransctionlist.component.css']
})
export class PeepaymenttransctionlistComponent implements OnInit {
  peePaymentData: PEEPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'PEE Payemnt Transction List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEEPaymentTransaction>(PeepaymenttransctioncreateComponent, 
      new PEEPaymentTransaction(),
      'Create PEE Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEEPaymentTransaction>(PeepaymenttransctiondetailComponent,
      this.peePaymentData.find(each => each.Id == id),
      "PEE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEEPaymentTransaction>(PeepaymenttransctioncreateComponent,
      this.peePaymentData.find(each => each.Id == id),
      "PEE Payment Edit");
  }
}
