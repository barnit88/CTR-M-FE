import { Component, OnInit } from '@angular/core';
import { PEBought } from './../../../../entity/models/PersonalEquipment/pebought';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MSPaymentTransactionService } from './../../../../services/api-service/MaterialService/mspayment-transaction.service';
import { PEBoughtService } from './../../../../services/api-service/PersonalEquipmentService/pebought.service';
import { PEBoughtTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-peboughtcreate',
  templateUrl: './peboughtcreate.component.html',
  styleUrls: ['./peboughtcreate.component.css']
})
export class PeboughtcreateComponent implements OnInit {
  data:PEBought;
  title:PEBoughtTitle.Create;
  constructor(private modelRef: BsModalRef,
    private peBoughtService: PEBoughtService) { }

  ngOnInit(): void {
  }
  public peBoughtSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddPEBought();
    } else {
      this.UpdatePEBought();
    }
    this.modelRef.hide();
  }
  private AddPEBought(): void{
    this.peBoughtService.addPEBought(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error)
      );
  }
  private UpdatePEBought(): void{
    this.peBoughtService.pebUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
