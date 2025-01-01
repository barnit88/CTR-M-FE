import { Component, OnInit } from '@angular/core';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MaterialUsedService } from './../../../../services/api-service/MaterialService/material-used.service';
import { MaterialUsedTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-materialusedcreate',
  templateUrl: './materialusedcreate.component.html',
  styleUrls: ['./materialusedcreate.component.css']
})
export class MaterialusedcreateComponent implements OnInit {
  data:MaterialUsed;
  title:MaterialUsedTitle.Create;

  constructor(private modelRef: BsModalRef,
    private materialUsedService: MaterialUsedService,
    ) { }

  ngOnInit(): void {
  }
  public materialUsedSubmit(){
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddMaterialUsed();
    } else {
      this.UpdateMaterialUsed();
    }
    this.modelRef.hide();
  }

  private AddMaterialUsed(): void{
    this.materialUsedService.addMaterialUsed(this.data).subscribe(
      (response)=> console.log('done with adding '+response),
      (error)=> console.log(error));
  }
  private UpdateMaterialUsed(): void{
    this.materialUsedService.muUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log(' done with update '+ response),
      (error)=> console.log(error));
  }

}
