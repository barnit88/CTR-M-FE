import { Component, OnInit } from '@angular/core';
import { RvepaymenttransctioncreateComponent } from './../rvepaymenttransctioncreate/rvepaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvepaymenttransctiondetailComponent } from './../rvepaymenttransctiondetail/rvepaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVEPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvepayment-transaction';
@Component({
  selector: 'app-rvepaymenttransctionlist',
  templateUrl: './rvepaymenttransctionlist.component.html',
  styleUrls: ['./rvepaymenttransctionlist.component.css']
})
export class RvepaymenttransctionlistComponent implements OnInit {
  rvPaymentData: RVEPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVEPaymentTransaction>(RvepaymenttransctioncreateComponent, 
      new RVEPaymentTransaction(),
      'Create RVE Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVEPaymentTransaction>(RvepaymenttransctiondetailComponent,
      this.rvPaymentData.find(each => each.Id == id),
      "RVE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVEPaymentTransaction>(RvepaymenttransctioncreateComponent,
      this.rvPaymentData.find(each => each.Id == id),
      "RVE Payment Edit");
  }
}
