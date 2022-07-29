import { Component, OnInit } from '@angular/core';
import { MaterialBought } from './../../../../entity/models/Material/material-bought';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MaterialBoughtService } from './../../../../services/api-service/MaterialService/material-bought.service';
import { MaterialBoughtTitle } from 'src/app/entity/Enum/Enums';
import { MaterialService } from './../../../../services/api-service/MaterialService/material.service';
import { pipe } from 'rxjs';
import { Material } from 'src/app/entity/models/Material/material';


@Component({
  selector: 'app-materialboughtcreate',
  templateUrl: './materialboughtcreate.component.html',
  styleUrls: ['./materialboughtcreate.component.css']
})
export class MaterialboughtcreateComponent implements OnInit {
  data:MaterialBought;
  title:MaterialBoughtTitle.Create;
  materials:Material[]=[];

  constructor(private modelRef: BsModalRef,
    private materialBoughtService: MaterialBoughtService,
    private materialService:MaterialService) { }

  ngOnInit(): void {
    this.MaterialList();        
  }

  check(Material){
    console.log(Material);
  }

  onSelect(): any{
    console.log('chnage')
  }



  public MaterialList(): any{
    this.materialService.getMaterialList().subscribe(
      (data)=>{
        this.materials = data;
      }
      ,
      (error)=> console.log(error));
  }
  


  public materialBoughtSubmit(): void{
    console.log(this.data);
    if( this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
      this.AddMaterialBought();
    }else{
      this.UpdateMaterialBought();
    }
    
  }
  private AddMaterialBought(): void{
    this.materialBoughtService.addMaterialBought(this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error
    ));
  }

  private UpdateMaterialBought(): void{
    this.materialBoughtService.mbUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    );
  }


}
