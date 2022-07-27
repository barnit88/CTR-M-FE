import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentedEquipment } from 'src/app/entity/models/RentedEquipment/rented-equipment';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RentedEquipmentService } from './../../../../services/api-service/RentedEquipmentService/rented-equipment.service';
import { RentedEquipmentTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-rentedequipmentcreate',
  templateUrl: './rentedequipmentcreate.component.html',
  styleUrls: ['./rentedequipmentcreate.component.css']
})
export class RentedequipmentcreateComponent implements OnInit {
  data: RentedEquipment;
  title:RentedEquipmentTitle.Create;

  constructor(private modelRef: BsModalRef,
    private rentedEquipmentService: RentedEquipmentService) { }

  ngOnInit(): void {
  }
  
  public rentedEquipmentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRE();
    } else {
      this.UpdateRE();
    }
    this.modelRef.hide();
  }

  private AddRE(): void{
    this.rentedEquipmentService.addRentedEquipment(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateRE(): void {
    this.rentedEquipmentService.reUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }

}
