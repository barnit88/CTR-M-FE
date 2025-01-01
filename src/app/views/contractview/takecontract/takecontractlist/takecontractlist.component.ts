import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { TakecontractcreateComponent } from '../takecontractcreate/takecontractcreate.component';
import { TakeContract } from './../../../../entity/models/Contract/take-contract';
import { TakecontractdetailComponent } from './../takecontractdetail/takecontractdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { TakeContractTitle } from 'src/app/entity/Enum/Enums';
import { TakeContractService } from './../../../../services/api-service/ContractService/take-contract.service';
@Component({
  selector: 'app-takecontractlist',
  templateUrl: './takecontractlist.component.html',
  styleUrls: ['./takecontractlist.component.css']
})
export class TakecontractlistComponent implements OnInit {
    data: TakeContract[]=[];
    title:TakeContractTitle.Create;
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private takeContractService:TakeContractService
     ) {}

  ngOnInit(): void {
  this.onGetList();
  }
  onGetList(): any {
    this.takeContractService.getTakeContract().subscribe({next:(response)=>{ 
      console.log(response);
      this.data = response},
      error:(error:any)=> console.log(error),
      complete:()=> console.log("Done with fetching  Client  list")}); 
  }

  onGetById(id:number): any{
      this.takeContractService.getTakeContractById(id).subscribe((response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  Client  by id ')
    )
  }

  deleteById(id:number): any {  
    var ans = confirm("Do you want to delete  Client  with Id: " + id);  
    if (ans) {  
        this.takeContractService.deleteTakeContract(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  Client ')
        }, (error: any) => console.error(error))  
    } 
    }

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<TakeContract>(TakecontractcreateComponent, 
      new TakeContract(),
      'Create TakeContract List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<TakeContract>(TakecontractdetailComponent,
      this.data.find(each => each.Id == id),
      "TakeContract Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<TakeContract>(TakecontractcreateComponent,
      this.data.find(each => each.Id == id),
      "TakeContract Edit");
  }

}
