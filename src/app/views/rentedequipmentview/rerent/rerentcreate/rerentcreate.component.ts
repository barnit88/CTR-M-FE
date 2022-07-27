import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RERent } from 'src/app/entity/models/RentedEquipment/rerent';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RERentService } from './../../../../services/api-service/RentedEquipmentService/rerent.service';
import { RERentTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-rerentcreate',
  templateUrl: './rerentcreate.component.html',
  styleUrls: ['./rerentcreate.component.css']
})
export class RerentcreateComponent implements OnInit {
data:RERent;
title:RERentTitle.Create;

  constructor(private modelRef: BsModalRef,
    private reRentService: RERentService) { }

  ngOnInit(): void {
  }

  public reRentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRER();
    } else {
      this.UpdateRER();
    }
    this.modelRef.hide();
  }

  private AddRER(): void{
    this.reRentService.addRERent(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateRER(): void {
    this.reRentService.rerUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
