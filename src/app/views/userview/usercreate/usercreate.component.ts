import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/entity/models/User/user';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {
  user: User = new User();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New User"
  userSubmit(form:NgForm){
    console.log(form)
  }
}
