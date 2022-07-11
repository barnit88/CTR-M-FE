import { Component, OnInit } from '@angular/core';
import { ClientdetailComponent } from './../clientdetail/clientdetail.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ClientcreateComponent } from '../clientcreate/clientcreate.component';
@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
})
export class ClientlistComponent implements OnInit {
  
  constructor(private genericDetailPopUpService: GenericDetailPopUpService, private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Client Details';

  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(ClientdetailComponent,{
      title:"Client details"
    });
  }
  
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ClientcreateComponent, {
      title: 'Client Create',
    });
  }
}