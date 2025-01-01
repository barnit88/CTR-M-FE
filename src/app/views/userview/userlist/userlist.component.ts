import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
import { UsercreateComponent } from './../usercreate/usercreate.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { UserdetailComponent } from './../userdetail/userdetail.component';
import { User } from 'src/app/entity/models/User/user';
import { UserService } from './../../../services/api-service/UserService/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userData: User[]=[];

  constructor(private genericModalPopUpService: GenericModalPopUpService,
    private genericDetailPopUpService:GenericDetailPopUpService,
    private userService:UserService) {}

  ngOnInit(): void {}
  title: string = 'Users List';

  onGetRVEPaymentList(): any{
    this.userService.getUserList().subscribe(
      (response)=> response.map(response=>{
        return this.userData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RVEPayment  list") 
    );
    console.log(this.userData)
  }
  onGetSingleRVEPayment(id:number): any{
    this.userService.getUserById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVEPayment  by id '));
    
  }
  getRVEPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.userService.deleteUserById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVEPayment ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

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

