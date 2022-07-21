import { Component, OnInit } from '@angular/core';
import { RvrpaymenttransctioncreateComponent } from './../rvrpaymenttransctioncreate/rvrpaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvrpaymenttransctiondetailComponent } from './../rvrpaymenttransctiondetail/rvrpaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVRPaymentTransaction } from './../../../../entity/models/RentedVehicle/rvrpayment-transaction';
@Component({
  selector: 'app-rvrpaymenttransctionlist',
  templateUrl: './rvrpaymenttransctionlist.component.html',
  styleUrls: ['./rvrpaymenttransctionlist.component.css']
})
export class RvrpaymenttransctionlistComponent implements OnInit {
  rvrPaymentData: RVRPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Rent Payment List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVRPaymentTransaction>(RvrpaymenttransctioncreateComponent, 
      new RVRPaymentTransaction(),
      'Create RVR payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRPaymentTransaction>(RvrpaymenttransctiondetailComponent,
      this.rvrPaymentData.find(each => each.Id == id),
      "RVR payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRPaymentTransaction>(RvrpaymenttransctioncreateComponent,
      this.rvrPaymentData.find(each => each.Id == id),
      "RVR payment Edit");
  }
}
