import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientcreateComponent } from '../clientcreate/clientcreate.component';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
})
export class ClientlistComponent implements OnInit {
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Client List';

  CreateClient() {
    this.genericModalPopUpService.openDetailModal(ClientcreateComponent, {
      title: 'Create Client',
    });
  }
}
