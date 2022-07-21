import { Component, OnInit } from '@angular/core';
import { RvipaymenttransctioncreateComponent } from './../rvipaymenttransctioncreate/rvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvipaymenttransctiondetailComponent } from './../rvipaymenttransctiondetail/rvipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVIPaymentTransaction } from './../../../../entity/models/RentedVehicle/rvipayment-transaction';
@Component({
  selector: 'app-rvipaymenttransctionlist',
  templateUrl: './rvipaymenttransctionlist.component.html',
  styleUrls: ['./rvipaymenttransctionlist.component.css']
})
export class RvipaymenttransctionlistComponent implements OnInit {
  rviPaymentData: RVIPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Income PaymentList';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVIPaymentTransaction>(RvipaymenttransctioncreateComponent, 
      new RVIPaymentTransaction(),
      'Create RVI Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIPaymentTransaction>(RvipaymenttransctiondetailComponent,
      this.rviPaymentData.find(each => each.Id == id),
      "RVI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIPaymentTransaction>(RvipaymenttransctioncreateComponent,
      this.rviPaymentData.find(each => each.Id == id),
      "RVI Payment Edit");
  }
}
