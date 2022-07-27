import { Component, OnInit } from '@angular/core';
import { MaterialStock } from './../../../../entity/models/Material/material-stock';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MaterialStockService } from './../../../../services/api-service/MaterialService/material-stock.service';
import { MaterialStockTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-materialstockcreate',
  templateUrl: './materialstockcreate.component.html',
  styleUrls: ['./materialstockcreate.component.css']
})
export class MaterialstockcreateComponent implements OnInit {
  data:MaterialStock;
  title:MaterialStockTitle.Create;
  
  constructor(private modelRef: BsModalRef,
    private materialStockService: MaterialStockService,
    ) { }

  ngOnInit(): void {
  }
  public materialStockSubmit(){
    if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
      this.AddMaterialStock();
    } else {
      this.UpdateMaterialStock();
    }
    this.modelRef.hide();
  }

  private AddMaterialStock(): void{
    this.materialStockService.addMaterialStock(this.data).subscribe(
      (response)=> console.log('done with adding  '+ response),
      (error)=> console.log(error));
  }

  private UpdateMaterialStock(): void{
    this.materialStockService.mstockUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+ response),
      (error)=> console.log(error));
  }

}
