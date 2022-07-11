import { Component, OnInit } from '@angular/core';
import { PvipaymenttransctioncreateComponent } from './../pvipaymenttransctioncreate/pvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvipaymenttransctiondetailComponent } from './../pvipaymenttransctiondetail/pvipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
@Component({
  selector: 'app-pvipaymenttransctionlist',
  templateUrl: './pvipaymenttransctionlist.component.html',
  styleUrls: ['./pvipaymenttransctionlist.component.css']
})
export class PvipaymenttransctionlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income Transaction List';
  
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvipaymenttransctioncreateComponent, {
      title: 'Create New PVI Transaction',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(PvipaymenttransctiondetailComponent,{
      title:"personal Vehicle Income payment details"
    });
  }
}
