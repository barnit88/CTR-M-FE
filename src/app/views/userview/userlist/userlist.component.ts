import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
import { UsercreateComponent } from './../usercreate/usercreate.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { UserdetailComponent } from './../userdetail/userdetail.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  constructor(private genericModalPopUpService: GenericModalPopUpService,private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Users List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(UsercreateComponent, {
      title: 'Create New User',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(UserdetailComponent,{
      title:"User Details"
    });
  }
  
}

