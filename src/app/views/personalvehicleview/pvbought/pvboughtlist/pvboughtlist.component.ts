import { Component, OnInit } from '@angular/core';
import { PvboughtcreateComponent } from './../pvboughtcreate/pvboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvboughtdetailComponent } from './../pvboughtdetail/pvboughtdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVBought } from './../../../../entity/models/PersonalVehicle/pvbought';
import { PVBoughtService } from './../../../../services/api-service/PersonalVehicleService/pvbought.service';
@Component({
  selector: 'app-pvboughtlist',
  templateUrl: './pvboughtlist.component.html',
  styleUrls: ['./pvboughtlist.component.css']
})
export class PvboughtlistComponent implements OnInit {
  pvBoughtData: PVBought[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private pvBoughtService:PVBoughtService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Bought List';

  onGetPEBoughtList(): any{
    this.pvBoughtService.getPVBoughtList().subscribe(
      (response)=> response.map(response=>{
        return this.pvBoughtData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PEBought list") 
    );
    console.log(this.pvBoughtData)
  }
  onGetSinglePEBought(id:number): any{
    this.pvBoughtService.getPVBoughtById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  PEBought by id ')
    );
  }
  onDeletePEBought(id:number): any {  
    var ans = confirm("Do you want to delete  PEBought with Id: " + id);  
    if (ans) {  
        this.pvBoughtService.deletePVBoughtById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  PEBought')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVBought>(PvboughtcreateComponent, 
      new PVBought(),
      'Create PV Bought List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBought>(PvboughtdetailComponent,
      this.pvBoughtData.find(each => each.Id == id),
      "PV Bought Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVBought>(PvboughtcreateComponent,
      this.pvBoughtData.find(each => each.Id == id),
      "PV Bought Edit");
  }
}
