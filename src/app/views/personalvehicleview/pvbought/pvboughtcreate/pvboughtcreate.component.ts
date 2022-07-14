import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVBought } from './../../../../entity/models/PersonalVehicle/pvbought';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pvboughtcreate',
  templateUrl: './pvboughtcreate.component.html',
  styleUrls: ['./pvboughtcreate.component.css']
})
export class PvboughtcreateComponent implements OnInit {
  pvBought: PVBought=new PVBought();
  constructor(private genericModalPopUpService: GenericModalPopUpService) {}


  ngOnInit(): void {
  }
  title:string="Create New PVB";

  pvBoughtSubmit(form:NgForm){
    console.log(form);
    
  }

}
