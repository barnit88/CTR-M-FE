import { Component, OnInit } from '@angular/core';
import { MaterialstockcreateComponent } from './../materialstockcreate/materialstockcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialstockdetailComponent } from './../materialstockdetail/materialstockdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialStock } from './../../../../entity/models/Material/material-stock';
import { MaterialStockService } from './../../../../services/api-service/MaterialService/material-stock.service';
@Component({
  selector: 'app-materialstocklist',
  templateUrl: './materialstocklist.component.html',
  styleUrls: ['./materialstocklist.component.css']
})
export class MaterialstocklistComponent implements OnInit {
  materialStockData : MaterialStock[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private materialStockService:MaterialStockService) {}

  ngOnInit(): void {}
  title: string = 'Material Stock List';

  onGetMaterialStockList(): any{
    this.materialStockService.getMaterialStockList().subscribe(
      (response)=> response.map(response=>{
        return this.materialStockData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Material Stock list") 
    );
    console.log(this.materialStockData)
  }
  onGetSingleMaterialStock(id:number): any{
    this.materialStockService.getMaterialStockById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Material Stock by id ')
    );
  }
  onDeleteMaterialStock(id:number): any {  
    var ans = confirm("Do you want to delete Material Stock with Id: " + id);  
    if (ans) {  
        this.materialStockService.deleteMaterialStockById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting Material')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialStock>(MaterialstockcreateComponent, 
      new MaterialStock(),
      'Create Material Stock List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialStock>(MaterialstockdetailComponent,
      this.materialStockData.find(each => each.Id == id),
      "Material Stock Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialStock>(MaterialstockcreateComponent,
      this.materialStockData.find(each => each.Id == id),
      "Material Stock Edit");
  }
}
