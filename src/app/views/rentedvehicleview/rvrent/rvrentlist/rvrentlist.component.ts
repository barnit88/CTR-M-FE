import { Component, OnInit } from '@angular/core';
import { RvrentcreateComponent } from './../rvrentcreate/rvrentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvrentdetailComponent } from './../rvrentdetail/rvrentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVRent } from './../../../../entity/models/RentedVehicle/rvrent';
@Component({
  selector: 'app-rvrentlist',
  templateUrl: './rvrentlist.component.html',
  styleUrls: ['./rvrentlist.component.css']
})
export class RvrentlistComponent implements OnInit {
  rvrData: RVRent[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Rent Vehicle Rent List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVRent>(RvrentcreateComponent, 
      new RVRent(),
      'Create RV Rent List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRent>(RvrentdetailComponent,
      this.rvrData.find(each => each.Id == id),
      "RV Rent Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRent>(RvrentcreateComponent,
      this.rvrData.find(each => each.Id == id),
      "RV Rent Edit");
  }
}
