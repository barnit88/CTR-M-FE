import { Component, OnInit } from '@angular/core';
import { ReipaymenttransctioncreateComponent } from './../reipaymenttransctioncreate/reipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReipaymenttransctiondetailComponent } from './../reipaymenttransctiondetail/reipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REIPaymentTransaction } from 'src/app/entity/models/RentedEquipment/reipayment-transaction';
@Component({
  selector: 'app-reipaymenttransctionlist',
  templateUrl: './reipaymenttransctionlist.component.html',
  styleUrls: ['./reipaymenttransctionlist.component.css']
})
export class ReipaymenttransctionlistComponent implements OnInit {
  reiPaymentData: REIPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Income Payment Transaction';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REIPaymentTransaction>(ReipaymenttransctioncreateComponent, 
      new REIPaymentTransaction(),
      'Create REI Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIPaymentTransaction>(ReipaymenttransctiondetailComponent,
      this.reiPaymentData.find(each => each.Id == id),
      "REI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIPaymentTransaction>(ReipaymenttransctioncreateComponent,
      this.reiPaymentData.find(each => each.Id == id),
      "REI Payment Edit");
  }

}
