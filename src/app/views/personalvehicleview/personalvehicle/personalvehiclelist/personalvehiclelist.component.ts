import { Component, OnInit } from '@angular/core';
import { PersonalvehiclecreateComponent } from './../personalvehiclecreate/personalvehiclecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PersonalvehicledetailComponent } from './../personalvehicledetail/personalvehicledetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PersonalVehicle } from './../../../../entity/models/PersonalVehicle/personal-vehicle';
import { PersonalVehicleService } from './../../../../services/api-service/PersonalVehicleService/personal-vehicle.service';
@Component({
  selector: 'app-personalvehiclelist',
  templateUrl: './personalvehiclelist.component.html',
  styleUrls: ['./personalvehiclelist.component.css']
})
export class PersonalvehiclelistComponent implements OnInit {
  pvData: PersonalVehicle[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private personalVehicleService:PersonalVehicleService) {}

  ngOnInit(): void {}
  title: string = 'Personal Vehicle List';

  onGetPEList(): any{
    this.personalVehicleService.getPersonalVehicleList().subscribe(
      (response)=> response.map(response=>{
        return this.pvData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PE list") 
    );
    console.log(this.pvData)
  }
  onGetSinglePE(id:number): any{
    this.personalVehicleService.getPersonalVehicleById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  PE by id ')
    );
  }
  onDeletePE(id:number): any {  
    var ans = confirm("Do you want to delete  PE with Id: " + id);  
    if (ans) {  
        this.personalVehicleService.deletePersonalVehicleById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  PE')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PersonalVehicle>(PersonalvehiclecreateComponent, 
      new PersonalVehicle(),
      'Create Personal Vehicle List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalVehicle>(PersonalvehicledetailComponent,
      this.pvData.find(each => each.Id == id),
      "Personal Vehicle Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PersonalVehicle>(PersonalvehiclecreateComponent,
      this.pvData.find(each => each.Id == id),
      "Personal Vehicle Edit");
  }
}
