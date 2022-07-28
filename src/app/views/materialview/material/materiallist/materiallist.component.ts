import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialcreateComponent } from './../materialcreate/materialcreate.component';
import { MaterialdetailComponent } from './../materialdetail/materialdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { Material } from './../../../../entity/models/Material/material';
import { MaterialService } from './../../../../services/api-service/MaterialService/material.service';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css']
})
export class MateriallistComponent implements OnInit {
  materialData: Material[]= [];
  title: string = 'Material List';
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private materialService:MaterialService) {}

  ngOnInit(): void {
    this.onGetMaterialList();
  }
  onGetMaterialList(): any{
    this.materialService.getMaterialList().subscribe(
      (response)=> response.map(response=>{
        return this.materialData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Material list") 
    );
    console.log(this.materialData)
  }
  onGetSingleMaterial(id:number): any{
    this.materialService.getMaterialById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Material by id ')
    );
  }
  onDeleteMaterial(id:number): any {  
    var ans = confirm("Do you want to delete customer with Id: " + id);  
    if (ans) {  
        this.materialService.deleteMaterialById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting Material')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}  
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<Material>(MaterialcreateComponent, 
      new Material(),
      'Create Material payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Material>(MaterialdetailComponent,
      this.materialData.find(each => each.Id == id),
      "Material Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Material>(MaterialcreateComponent,
      this.materialData.find(each => each.Id == id),
      "Material Payment Edit");
  }
}
