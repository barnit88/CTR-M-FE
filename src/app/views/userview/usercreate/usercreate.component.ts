import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/entity/models/User/user';
import { UserService } from './../../../services/api-service/UserService/user.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  data:User;
  title:UserTitle.Create;
  
  constructor(private userService: UserService,
    private modelRef: BsModalRef) { }

  ngOnInit(): void {
  }
  
  public onUserSubmit() : void {
    console.log(this.data);
    if (this.data.Id === undefined || this.data.Id === null, this.data.Id === 0) {
        this.AddUser();
    } else {
        this.UpdateUser();
    }
    this.modelRef.hide();
}

private AddUser() : void {
    this.userService.addUser(this.data).subscribe(
      (response) => console.log('done with adding' + response),
       (error) => console.log(error));
}

private UpdateUser() : void {
    this.userService.updateUser(this.data.Id, this.data).subscribe(
      (response: any) => console.log('done with update' + response),
       (error: any) => console.log(error));
}


}
