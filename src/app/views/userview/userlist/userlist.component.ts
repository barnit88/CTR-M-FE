import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { UsercreateComponent } from './../usercreate/usercreate.component';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Users List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(UsercreateComponent, {
      title: 'Create New User',
    });
  }

}
