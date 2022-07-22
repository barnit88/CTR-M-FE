import { Component, OnInit } from '@angular/core';
import { PersonalequipmentcreateComponent } from './../personalequipmentcreate/personalequipmentcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalequipmentdetailComponent } from './../personalequipmentdetail/personalequipmentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PersonalEquipment } from './../../../../entity/models/PersonalEquipment/personal-equipment';
import { PersonalEquipmentService } from './../../../../services/api-service/PersonalEquipmentService/personal-equipment.service';
@Component({
  selector: 'app-personalequipmentlist',
  templateUrl: './personalequipmentlist.component.html',
  styleUrls: ['./personalequipmentlist.component.css']
})
export class PersonalequipmentlistComponent implements OnInit {
  peData: PersonalEquipment[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private personalEquipmentService:PersonalEquipmentService) {}

  ngOnInit(): void {}
  title: string = 'Personal Equipment List';

  onGetPEList(): any{
    this.personalEquipmentService.getPersonalEquipmentList().subscribe(
      (response)=> response.map(response=>{
        return this.peData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching PE list") 
    );
    console.log(this.peData)
  }
  onGetSinglePE(id:number): any{
    this.personalEquipmentService.getPersonalEquipmentById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single PE by id ')
    );
  }
  onDeletePE(id:number): any {  
    var ans = confirm("Do you want to delete PE with Id: " + id);  
    if (ans) {  
        this.personalEquipmentService.deletePersonalEquipmentById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting Personal Equipment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PersonalEquipment>(PersonalequipmentcreateComponent, 
      new PersonalEquipment(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalEquipment>(PersonalequipmentdetailComponent,
      this.peData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalEquipment>(PersonalequipmentcreateComponent,
      this.peData.find(each => each.Id == id),
      "Personal Equipment Edit");
  }

}
