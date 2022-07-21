import { Component, OnInit } from '@angular/core';
import { RvincomecreateComponent } from './../rvincomecreate/rvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvincomedetailComponent } from './../rvincomedetail/rvincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVIncome } from './../../../../entity/models/RentedVehicle/rvincome';
@Component({
  selector: 'app-rvincomelist',
  templateUrl: './rvincomelist.component.html',
  styleUrls: ['./rvincomelist.component.css']
})
export class RvincomelistComponent implements OnInit {
  rviData: RVIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rented vehicle Income List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVIncome>(RvincomecreateComponent, 
      new RVIncome(),
      'Create RV Income List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIncome>(RvincomedetailComponent,
      this.rviData.find(each => each.Id == id),
      "RV Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIncome>(RvincomecreateComponent,
      this.rviData.find(each => each.Id == id),
      "RV Income Edit");
  }
}
