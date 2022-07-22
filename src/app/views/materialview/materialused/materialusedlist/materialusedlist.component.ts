import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialusedcreateComponent } from './../materialusedcreate/materialusedcreate.component';
import { MaterialuseddetailComponent } from './../materialuseddetail/materialuseddetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialUsed } from 'src/app/entity/models/Material/material-used';
import { MaterialUsedService } from './../../../../services/api-service/MaterialService/material-used.service';

@Component({
  selector: 'app-materialusedlist',
  templateUrl: './materialusedlist.component.html',
  styleUrls: ['./materialusedlist.component.css']
})
export class MaterialusedlistComponent implements OnInit {
  materialUsedData : MaterialUsed[]=[];
    title:string="create New Material Used"

  constructor(private genericModalPopUpService:GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private materialUsedService:MaterialUsedService) { }
  ngOnInit(): void {
  }

  onGetMaterialUsedList(): any{
    this.materialUsedService.getMaterialUsedList().subscribe(
      (response)=> response.map(response=>{
        return this.materialUsedData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Material Used list") 
    );
    console.log(this.materialUsedData)
  }
  onGetSingleMaterialUsed(id:number): any{
    this.materialUsedService.getMaterialUsedById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Material Used by id ')
    );
  }
  onDeleteMaterialUsed(id:number): any {  
    var ans = confirm("Do you want to delete Material Used with Id: " + id);  
    if (ans) {  
        this.materialUsedService.deleteMaterialUsedById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting Material Used')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialUsed>(MaterialusedcreateComponent, 
      new MaterialUsed(),
      'Create Material Used List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialUsed>(MaterialuseddetailComponent,
      this.materialUsedData.find(each => each.Id == id),
      "Material Used Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialUsed>(MaterialusedcreateComponent,
      this.materialUsedData.find(each => each.Id == id),
      "Material Used Edit");
  }
}

