import { Component, OnInit } from '@angular/core';
import { PvipaymenttransctioncreateComponent } from './../pvipaymenttransctioncreate/pvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvipaymenttransctiondetailComponent } from './../pvipaymenttransctiondetail/pvipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVIPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvipayment-transaction';
@Component({
  selector: 'app-pvipaymenttransctionlist',
  templateUrl: './pvipaymenttransctionlist.component.html',
  styleUrls: ['./pvipaymenttransctionlist.component.css']
})
export class PvipaymenttransctionlistComponent implements OnInit {
  pviPaymentData: PVIPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income Transaction List';
  
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVIPaymentTransaction>(PvipaymenttransctioncreateComponent, 
      new PVIPaymentTransaction(),
      'Create PVI Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIPaymentTransaction>(PvipaymenttransctiondetailComponent,
      this.pviPaymentData.find(each => each.Id == id),
      "PVI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIPaymentTransaction>(PvipaymenttransctioncreateComponent,
      this.pviPaymentData.find(each => each.Id == id),
      "PVI Payment Edit");
  }
}
