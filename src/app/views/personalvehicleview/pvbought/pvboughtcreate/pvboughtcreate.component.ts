import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PVBought } from './../../../../entity/models/PersonalVehicle/pvbought';
import { NgForm } from '@angular/forms';
import { PVBoughtService } from 'src/app/services/api-service/PersonalVehicleService/pvbought.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PVBoughtTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-pvboughtcreate',
  templateUrl: './pvboughtcreate.component.html',
  styleUrls: ['./pvboughtcreate.component.css']
})
export class PvboughtcreateComponent implements OnInit {
  data:PVBought;
  title:PVBoughtTitle.Create;

  constructor(private genericModalPopUpService: GenericModalPopUpService,
    private pvBoughtService: PVBoughtService,
    private modelRef: BsModalRef) {}

  ngOnInit(): void {
  }

  public pvBoughtSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPVBought();
    } else {
      this.UpdatePEBought();
    }
    this.modelRef.hide();
  }
  private AddPVBought(): void{
    this.pvBoughtService.addPVBought(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePEBought(): void{
    this.pvBoughtService.pvbUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
