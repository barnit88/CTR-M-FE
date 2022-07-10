import { Component, OnInit } from '@angular/core';
import { PvipaymenttransctioncreateComponent } from './../pvipaymenttransctioncreate/pvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
@Component({
  selector: 'app-pvipaymenttransctionlist',
  templateUrl: './pvipaymenttransctionlist.component.html',
  styleUrls: ['./pvipaymenttransctionlist.component.css']
})
export class PvipaymenttransctionlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income Transaction List';
  
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(PvipaymenttransctioncreateComponent, {
      title: 'Create New PVI Transaction',
    });
  }
}
