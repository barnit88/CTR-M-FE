import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { MaterialsoldcreateComponent } from './../materialsoldcreate/materialsoldcreate.component';
import { MaterialsolddetailComponent } from './../materialsolddetail/materialsolddetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { MaterialSold } from './../../../../entity/models/Material/material-sold';
import { MaterialSoldService } from './../../../../services/api-service/MaterialService/material-sold.service';

@Component({
  selector: 'app-materialsoldlist',
  templateUrl: './materialsoldlist.component.html',
  styleUrls: ['./materialsoldlist.component.css']
})
export class MaterialsoldlistComponent implements OnInit {
  materialSoldData: MaterialSold[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private materialSoldService: MaterialSoldService) {}

  ngOnInit(): void {}
  title: string = 'Material Sold List';

  onGetMaterialSoldList(): any{
    this.materialSoldService.getMaterialSoldList().subscribe(
      (response)=> response.map(response=>{
        return this.materialSoldData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Material Sold list") 
    );
    console.log(this.materialSoldData)
  }
  onGetSingleMaterialSold(id:number): any{
    this.materialSoldService.getMaterialSoldById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Material Sold by id ')
    );
  }
  onDeleteMaterialSold(id:number): any {  
    var ans = confirm("Do you want to delete Material Sold with Id: " + id);  
    if (ans) {  
        this.materialSoldService.deleteMaterialSoldById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting Material Sold')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<MaterialSold>(MaterialsoldcreateComponent, 
      new MaterialSold(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialSold>(MaterialsolddetailComponent,
      this.materialSoldData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<MaterialSold>(MaterialsoldcreateComponent,
      this.materialSoldData.find(each => each.Id == id),
      "Material Sold Edit");
  }

}
