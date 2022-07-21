import { Component, OnInit } from '@angular/core';
import { PebpaymenttransctioncreateComponent } from './../pebpaymenttransctioncreate/pebpaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PebpaymenttransctiondetailComponent } from './../pebpaymenttransctiondetail/pebpaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEBPaymentTransaction } from './../../../../entity/models/PersonalEquipment/pebpayment-transaction';
@Component({
  selector: 'app-pebpaymenttransctionlist',
  templateUrl: './pebpaymenttransctionlist.component.html',
  styleUrls: ['./pebpaymenttransctionlist.component.css']
})
export class PebpaymenttransctionlistComponent implements OnInit {
  pebPaymentData: PEBPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Material List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEBPaymentTransaction>(PebpaymenttransctioncreateComponent, 
      new PEBPaymentTransaction(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBPaymentTransaction>(PebpaymenttransctiondetailComponent,
      this.pebPaymentData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBPaymentTransaction>(PebpaymenttransctioncreateComponent,
      this.pebPaymentData.find(each => each.Id == id),
      "Employee Payment Edit");
  }
}
