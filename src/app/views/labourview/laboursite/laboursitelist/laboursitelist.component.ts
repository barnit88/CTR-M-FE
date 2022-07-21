import { Component, OnInit } from '@angular/core';
import { LaboursitecreateComponent } from './../laboursitecreate/laboursitecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LaboursitedetailComponent } from './../laboursitedetail/laboursitedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { LabourSite } from 'src/app/entity/models/Labour/labour-site';
@Component({
  selector: 'app-laboursitelist',
  templateUrl: './laboursitelist.component.html',
  styleUrls: ['./laboursitelist.component.css']
})
export class LaboursitelistComponent implements OnInit {
  labourSiteData : LabourSite[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'labour Site List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<LabourSite>(LaboursitecreateComponent, 
      new LabourSite(),
      'Create Labour Site payment List',
    );
  }
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<LabourSite>(LaboursitedetailComponent,
      this.labourSiteData.find(each => each.Id == id),
      "Labour Site Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<LabourSite>(LaboursitecreateComponent,
      this.labourSiteData.find(each => each.Id == id),
      "Labour Site Payment Edit");
  }
}
