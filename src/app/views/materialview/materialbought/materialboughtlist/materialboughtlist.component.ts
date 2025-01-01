import { Component, OnInit } from '@angular/core';
import { MaterialboughtcreateComponent } from './../materialboughtcreate/materialboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialboughtdetailComponent } from './../materialboughtdetail/materialboughtdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialBought } from './../../../../entity/models/Material/material-bought';
import { MaterialBoughtService } from './../../../../services/api-service/MaterialService/material-bought.service';
@Component({
  selector: 'app-materialboughtlist',
  templateUrl: './materialboughtlist.component.html',
  styleUrls: ['./materialboughtlist.component.css']
})
export class MaterialboughtlistComponent implements OnInit {
  materialBoughtData: MaterialBought[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private materialBoughtService: MaterialBoughtService) {}

     onGetMaterialBoughtList(): any{
      this.materialBoughtService.getMaterialBoughtList().subscribe(
        (response)=> response.map(response=>{
          return this.materialBoughtData.push(response)
        }),
        (error:any)=> console.log(error),
        ()=> console.log("Done with fetching Material Bought list") 
      );
      console.log(this.materialBoughtData)
    }
    onGetSingleMaterialBought(id:number): any{
      this.materialBoughtService.getMaterialBoughtById(id).subscribe(
        (response)=> console.log(response),
        (error:any)=> console.log(error),
        ()=> console.log('done with geeting single Material Bought by id ')
      );
    }
    onDeleteMaterialBought(id:number): any {  
      var ans = confirm("Do you want to delete Material Bought with Id: " + id);  
      if (ans) {  
          this.materialBoughtService.deleteMaterialBoughtById(id).subscribe((data: any) => { 
            console.log('Sucess on deleting Material')
          }, (error: any) => console.error(error))  
      } else return this.ngOnInit();
  }  

  ngOnInit(): void {}
  title: string = 'Material Bought List';
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialBought>(MaterialboughtcreateComponent, 
      new MaterialBought(),
      'Create Material Bought List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialBought>(MaterialboughtdetailComponent,
      this.materialBoughtData.find(each => each.Id == id),
      "Material Bought Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialBought>(MaterialboughtcreateComponent,
      this.materialBoughtData.find(each => each.Id == id),
      "Material Bought Edit");
  }
}
