import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Site } from 'src/app/entity/models/Site/site';

@Component({
  selector: 'app-sitecreate',
  templateUrl: './sitecreate.component.html',
  styleUrls: ['./sitecreate.component.css']
})
export class SitecreateComponent implements OnInit {
  site : Site = new Site ();
  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New Site"
  siteSubmit(form:NgForm){}

}
