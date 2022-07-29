import { Component, OnInit } from '@angular/core';
import { MaterialSold } from './../../../../entity/models/Material/material-sold';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MaterialSoldService } from './../../../../services/api-service/MaterialService/material-sold.service';
import { MaterialSoldTitle } from 'src/app/entity/Enum/Enums';
import { MaterialService } from './../../../../services/api-service/MaterialService/material.service';
import { Material } from 'src/app/entity/models/Material/material';

@Component({
  selector: 'app-materialsoldcreate',
  templateUrl: './materialsoldcreate.component.html',
  styleUrls: ['./materialsoldcreate.component.css']
})
export class MaterialsoldcreateComponent implements OnInit {
  data:MaterialSold;
  title:MaterialSoldTitle.Create;
  materials: Material[]=[];
  
  constructor(private modelref: BsModalRef,
    private materialSoldService: MaterialSoldService,
    private materialService:MaterialService
    ) { }

  ngOnInit(): void {
    this.getmaterialList();
  }

  private getmaterialList(): any{
    this.materialService.getMaterialList().subscribe(
      (response)=> this.materials = response,
      (error)=> console.log(error));
      }

  public materialSoldSubmit(): void{
    if(this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
      this.AddMaterialSold();
    }else{
      this.UpdateMaterialSold();
    }
    this.modelref.hide();
  }

  private AddMaterialSold(): void{
    this.materialSoldService.addMaterialSold(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error),
    )
  }
  private UpdateMaterialSold(): void{
    this.materialSoldService.msUpdate(this.data.Id, this.data).subscribe(
      (response: any)=> console.log('done with update '+response),
      (error: any)=> console.log(error),
    )
  }

}
