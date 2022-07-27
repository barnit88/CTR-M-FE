import { Component, OnInit } from '@angular/core';
import { Material } from './../../../../entity/models/Material/material';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MaterialService } from './../../../../services/api-service/MaterialService/material.service';
import { MaterialTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-materialcreate',
  templateUrl: './materialcreate.component.html',
  styleUrls: ['./materialcreate.component.css']
})
export class MaterialcreateComponent implements OnInit {
  data: Material;
  title:MaterialTitle.Create;
  
  constructor(private modelRef: BsModalRef,
    private materialService: MaterialService,
    ) { }

  ngOnInit(): void {
  }

  public materialSubmit(){
    if(this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
      this.AddMaterial();
    }else{
      this.UpdateMaterial();
    }
    this.modelRef.hide();
  }
  private AddMaterial(): void{
    this.materialService.addMaterial(this.data).subscribe(
      (response)=> console.log('done with adding'+ response),
      (error)=> console.log(error)
    );
  }
  private UpdateMaterial(): void{
    this.materialService.materialUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    )
  }

}
