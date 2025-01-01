import { Component, OnInit } from '@angular/core';
import { RvepaymenttransctioncreateComponent } from './../rvepaymenttransctioncreate/rvepaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvepaymenttransctiondetailComponent } from './../rvepaymenttransctiondetail/rvepaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVEPaymentTransaction } from 'src/app/entity/models/RentedVehicle/rvepayment-transaction';
import { RVEPaymentTransactionService } from './../../../../services/api-service/RentedVehicleService/rvepayment-transaction.service';
@Component({
  selector: 'app-rvepaymenttransctionlist',
  templateUrl: './rvepaymenttransctionlist.component.html',
  styleUrls: ['./rvepaymenttransctionlist.component.css']
})
export class RvepaymenttransctionlistComponent implements OnInit {
  rvPaymentData: RVEPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private rvePaymentTransactionService:RVEPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';

  onGetRVEPaymentList(): any{
    this.rvePaymentTransactionService.getRVExpensePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.rvPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RVEPayment  list") 
    );
    console.log(this.rvPaymentData)
  }
  onGetSingleRVEPayment(id:number): any{
    this.rvePaymentTransactionService.getRVEPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVEPayment  by id '));
    
  }
  getRVEPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.rvePaymentTransactionService.deleteRVEPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVEPayment ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVEPaymentTransaction>(RvepaymenttransctioncreateComponent, 
      new RVEPaymentTransaction(),
      'Create RVE Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVEPaymentTransaction>(RvepaymenttransctiondetailComponent,
      this.rvPaymentData.find(each => each.Id == id),
      "RVE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVEPaymentTransaction>(RvepaymenttransctioncreateComponent,
      this.rvPaymentData.find(each => each.Id == id),
      "RVE Payment Edit");
  }
}
