import { Component, OnInit } from '@angular/core';
import { RvrpaymenttransctioncreateComponent } from './../rvrpaymenttransctioncreate/rvrpaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvrpaymenttransctiondetailComponent } from './../rvrpaymenttransctiondetail/rvrpaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVRPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvrpayment-transaction';
import { RVRPaymentTransactionService } from './../../../../services/api-service/RentedVehicleService/rvrpayment-transaction.service';
@Component({
  selector: 'app-rvrpaymenttransctionlist',
  templateUrl: './rvrpaymenttransctionlist.component.html',
  styleUrls: ['./rvrpaymenttransctionlist.component.css']
})
export class RvrpaymenttransctionlistComponent implements OnInit {
  rvrPaymentData: RVRPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private rvrPaymentTransactionService:RVRPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Rent Payment List';

  onGetRVRPaymentList(): any{
    this.rvrPaymentTransactionService.getRVRentPaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.rvrPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetge  RVRPayment  list") 
    );
    console.log(this.rvrPaymentData)
  }
  onGetSingleRVRPayment(id:number): any{
    this.rvrPaymentTransactionService.getRVRPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVRPayment  by id '));
    
  }
  getRVRPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  RVR Payment  with Id: " + id);  
    if (ans) {  
        this.rvrPaymentTransactionService.deleteRVRPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVR payment ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVRPaymentTransaction>(RvrpaymenttransctioncreateComponent, 
      new RVRPaymentTransaction(),
      'Create RVR payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRPaymentTransaction>(RvrpaymenttransctiondetailComponent,
      this.rvrPaymentData.find(each => each.Id == id),
      "RVR payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVRPaymentTransaction>(RvrpaymenttransctioncreateComponent,
      this.rvrPaymentData.find(each => each.Id == id),
      "RVR payment Edit");
  }
}
