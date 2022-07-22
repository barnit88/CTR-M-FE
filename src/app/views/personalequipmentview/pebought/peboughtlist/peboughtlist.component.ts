import { Component, OnInit } from '@angular/core';
import { PeboughtcreateComponent } from './../peboughtcreate/peboughtcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeboughtdetailComponent } from './../peboughtdetail/peboughtdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEBought } from './../../../../entity/models/PersonalEquipment/pebought';
import { PEBoughtService } from './../../../../services/api-service/PersonalEquipmentService/pebought.service';
@Component({
  selector: 'app-peboughtlist',
  templateUrl: './peboughtlist.component.html',
  styleUrls: ['./peboughtlist.component.css']
})
export class PeboughtlistComponent implements OnInit {
  peBoughtData : PEBought[]=[];
  title: string = 'PE Bought List';
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private pEBoughtService: PEBoughtService) {}

  onGetPEBoughtList(): any{
    this.pEBoughtService.getPEBoughtList().subscribe(
      (response)=> response.map(response=>{
        return this.peBoughtData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching PEBought list") 
    );
    console.log(this.peBoughtData)
  }
  onGetSinglePEBought(id:number): any{
    this.pEBoughtService.getPEBoughtById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single PEBought by id ')
    );
  }
  onDeletePEBought(id:number): any {  
    var ans = confirm("Do you want to delete PEBought with Id: " + id);  
    if (ans) {  
        this.pEBoughtService.deletePEBoughtById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting MaSPayment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  ngOnInit(): void {}
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEBought>(PeboughtcreateComponent, 
      new PEBought(),
      'Create PE Bought List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBought>(PeboughtdetailComponent,
      this.peBoughtData.find(each => each.Id == id),
      "PE Bought Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBought>(PeboughtcreateComponent,
      this.peBoughtData.find(each => each.Id == id),
      "PE Bought Edit");
  }
}
