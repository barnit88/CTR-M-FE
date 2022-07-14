import { Component, OnInit } from '@angular/core';
import { LabourSite } from './../../../../entity/models/Labour/labour-site';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-laboursitecreate',
  templateUrl: './laboursitecreate.component.html',
  styleUrls: ['./laboursitecreate.component.css']
})
export class LaboursitecreateComponent implements OnInit {
  labourSite: LabourSite=new LabourSite();

  constructor() { }

  ngOnInit(): void {
  }
  title:string="Create New LS"

  labourSiteSubmit(form:NgForm){
    console.log(form);
  }

}
