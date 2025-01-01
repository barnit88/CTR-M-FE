import { Component, OnInit } from '@angular/core';
import { RvipaymenttransctioncreateComponent } from './../rvipaymenttransctioncreate/rvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvipaymenttransctiondetailComponent } from './../rvipaymenttransctiondetail/rvipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVIPaymentTransaction } from './../../../../entity/models/RentedVehicle/rvipayment-transaction';
import { RVIPaymentTranactionService } from './../../../../services/api-service/RentedVehicleService/rvipayment-tranaction.service';
@Component({
  selector: 'app-rvipaymenttransctionlist',
  templateUrl: './rvipaymenttransctionlist.component.html',
  styleUrls: ['./rvipaymenttransctionlist.component.css']
})
export class RvipaymenttransctionlistComponent implements OnInit {
  rviPaymentData: RVIPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private rviPaymentTranactionService:RVIPaymentTranactionService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Income PaymentList';

  onGetRVIPaymentList(): any{
    this.rviPaymentTranactionService.getRVIncomePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.rviPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RVIPayment  list") 
    );
    console.log(this.rviPaymentData)
  }
  onGetSingleRVIPayment(id:number): any{
    this.rviPaymentTranactionService.getRVIPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVIPayment  by id '));
    
  }
  getRVIPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.rviPaymentTranactionService.deleteRVIPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVIPayment ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVIPaymentTransaction>(RvipaymenttransctioncreateComponent, 
      new RVIPaymentTransaction(),
      'Create RVI Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIPaymentTransaction>(RvipaymenttransctiondetailComponent,
      this.rviPaymentData.find(each => each.Id == id),
      "RVI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIPaymentTransaction>(RvipaymenttransctioncreateComponent,
      this.rviPaymentData.find(each => each.Id == id),
      "RVI Payment Edit");
  }
}
