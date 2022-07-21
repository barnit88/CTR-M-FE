import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
import { UsercreateComponent } from './../usercreate/usercreate.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { UserdetailComponent } from './../userdetail/userdetail.component';
import { User } from 'src/app/entity/models/User/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userData: User[]=[];

  constructor(private genericModalPopUpService: GenericModalPopUpService,private genericDetailPopUpService:GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Users List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<User>(UsercreateComponent, 
      new User(),
      'Create User List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<User>(UserdetailComponent,
      this.userData.find(each => each.Id == id),
      "User Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<User>(UsercreateComponent,
      this.userData.find(each => each.Id == id),
      "User Edit");
  }
  
}

