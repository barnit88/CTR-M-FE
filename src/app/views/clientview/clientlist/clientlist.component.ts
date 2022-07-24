import { Component, OnInit } from '@angular/core';
import { ClientdetailComponent } from './../clientdetail/clientdetail.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ClientcreateComponent } from '../clientcreate/clientcreate.component';
import { ClientService } from './../../../services/api-service/ClientService/client.service';
import { Client } from 'src/app/entity/models/Client/client';
import { filter } from 'rxjs';
import { IComponent } from '../../IComponent';
import { Buttons, ClientTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: "app-clientlist",
  templateUrl: "./clientlist.component.html",
  styleUrls: ["./clientlist.component.css"],
})
export class ClientlistComponent implements OnInit,IComponent<Client> {
    data: Client[];
    title: string =ClientTitle.List;
  constructor(private genericDetailPopUpService: GenericDetailPopUpService,
     private genericModalPopUpService: GenericModalPopUpService,
     private clientService:ClientService,
     public buttonTitle :Buttons
     ) {  }

  ngOnInit(): void {
    // this.onGetClientList();
  }

  // onGetClientList(): any{
  //     (response)=> this.data = response,
  //     (error:any)=> console.log(error),
  //     ()=> console.log("Done with fetching  Client  list") 
  //     () => console.log('Done with fetching  Client  list')
  //   console.log(this.data)
  //   console.log(this.data);
  // }

  // onGetSingleClient(id:number): any{
  //     (response)=> console.log(response),
  //     (error:any)=> console.log(error),
  //     ()=> console.log('done with geeting single  Client  by id '));
  //   );
  // }

  // deleteClientById(id:number): any {  
  //   var ans = confirm("Do you want to delete  Client  with Id: " + id);  
  //   if (ans) {  
  //       this.clientService.delete(id).subscribe((data: any) => { 
  //         console.log('Sucess on deleting  Client ')
  //       }, (error: any) => console.error(error))  
  //   } 
   

    OpenCreate():void{
      this.genericModalPopUpService.openModalPopUpService<Client>(ClientcreateComponent, 
        new Client(),
        ClientTitle.Create        
      );
    }
    
    OpenEdit(id:number):void{
      this.genericModalPopUpService.openModalPopUpService<Client>(ClientcreateComponent, 
        new Client(),
        ClientTitle.Edit        
      );
    }
    
    OpenDetail(id:number):void{
      this.genericModalPopUpService.openModalPopUpService<Client>(ClientdetailComponent, 
        new Client(),
        ClientTitle.Detail
      );
    }

    OpenDelete(id:number):void{

    }

  //   OpenDetailPopUp(id: number) {
  //     this.genericModalPopUpService.openModalPopUpService<Client>(ClientdetailComponent,
  //       this.data.find(x => x.Id == id),
  //       "Employee Payment Details",
  //       id)

  //   }
  
  //   OpenEditPopUp(id: number) {
  //     this.genericModalPopUpService.openModalPopUpService<Client>(ClientcreateComponent,
  //       this.data.find(x => x.Id == id),
  //       "Employee Payment Edit",
  //       id);
  //   }
}
