import { Component, OnInit } from '@angular/core';
import { Vendor } from './../../../entity/models/Vendor/vendor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vendorcreate',
  templateUrl: './vendorcreate.component.html',
  styleUrls: ['./vendorcreate.component.css']
})
export class VendorcreateComponent implements OnInit {
  vendor: Vendor= new Vendor();

  constructor() { }

  ngOnInit(): void {
  }
  title:string=" Vendor Create"
  vendorSubmit(form:NgForm){
    console.log(form);
    
  }
}
