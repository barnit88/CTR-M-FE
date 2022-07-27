import { Component, OnInit } from '@angular/core';
import { MaterialSold } from './../../../../entity/models/Material/material-sold';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MaterialSoldService } from './../../../../services/api-service/MaterialService/material-sold.service';
import { MaterialSoldTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-materialsoldcreate',
  templateUrl: './materialsoldcreate.component.html',
  styleUrls: ['./materialsoldcreate.component.css']
})
export class MaterialsoldcreateComponent implements OnInit {
  data:MaterialSold;
  title:MaterialSoldTitle.Create;
  
  constructor(private modelref: BsModalRef,
    private materialSoldService: MaterialSoldService,
    ) { }

  ngOnInit(): void {
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
