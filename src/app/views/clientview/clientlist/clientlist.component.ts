import { Component, OnInit } from '@angular/core';
import { ClientdetailComponent } from './../clientdetail/clientdetail.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { ClientcreateComponent } from '../clientcreate/clientcreate.component';
import { ClientService } from './../../../services/api-service/ClientService/client.service';
import { Client } from 'src/app/entity/models/Client/client';
import { filter } from 'rxjs';
import { Buttons } from 'src/app/entity/Enum/Enums';
@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
})
export class ClientlistComponent implements OnInit {
<<<<<<< Updated upstream
  constructor(
    private genericDetailPopUpService: GenericDetailPopUpService,
    private genericModalPopUpService: GenericModalPopUpService,
    private clientHttpService: ClientService
  ) {}

  listChangedSubscribe: Subscription;
  ngOnInit(): void {
    this.listChangedSubscribe = this.clientHttpService.listChanged.subscribe(
      (data) => {
        this.ClientList = data;
        console.log(this.ClientList);
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.listChangedSubscribe);
    this.clientHttpService.getAll();
  }
  title: string = 'Client Details';
=======
    data: Client[]=[];
    title: string = 'Client Details';
  constructor(private genericDetailPopUpService: GenericDetailPopUpService,
     private genericModalPopUpService: GenericModalPopUpService,
     private clientService:ClientService,
     public buttonTitle :Buttons
     ) {  }
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.onGetClientList();
  }
  
  onGetClientList(): any{
    this.clientService.getAll().subscribe(
      (response)=> response.map(response=>{
        return this.data.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  Client  list") 
    );
    console.log(this.data)
  }

  onGetSingleClient(id:number): any{
    this.clientService.getById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  Client  by id '));
  }

  deleteClientById(id:number): any {  
    var ans = confirm("Do you want to delete  Client  with Id: " + id);  
    if (ans) {  
        this.clientService.delete(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  Client ')
        }, (error: any) => console.error(error))  
    } 
    this.ngOnInit();
  }


    OpenModalPopUp() {
      this.genericModalPopUpService.openModalPopUpService<Client>(ClientcreateComponent, 
        new Client(),
        'Create Employee payment List'
      );
    }
   
    OpenDetailPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Client>(ClientdetailComponent,
        this.data.find(x => x.Id == id),
        "Employee Payment Details");

    }
  
    OpenEditPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Client>(ClientcreateComponent,
        this.data.find(x => x.Id == id),
        "Employee Payment Edit");
    }
}