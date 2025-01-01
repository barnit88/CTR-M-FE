import { Component, OnInit } from '@angular/core';
import { ReipaymenttransctioncreateComponent } from './../reipaymenttransctioncreate/reipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReipaymenttransctiondetailComponent } from './../reipaymenttransctiondetail/reipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REIPaymentTransaction } from 'src/app/entity/models/RentedEquipment/reipayment-transaction';
import { REIPaymentTransactionService } from './../../../../services/api-service/RentedEquipmentService/reipayment-transaction.service';
@Component({
  selector: 'app-reipaymenttransctionlist',
  templateUrl: './reipaymenttransctionlist.component.html',
  styleUrls: ['./reipaymenttransctionlist.component.css']
})
export class ReipaymenttransctionlistComponent implements OnInit {
  reiPaymentData: REIPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private reiPaymentTransactionService:REIPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Income Payment Transaction';

  onGetREIPaymentList(): any{
    this.reiPaymentTransactionService.getREIncomePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.reiPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  REI Payment list") 
    );
    console.log(this.reiPaymentData)
  }
  onGetSingleREIPayment(id:number): any{
    this.reiPaymentTransactionService.getREIPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  REI Payment by id '));
    
  }
  getREIPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  REI Payment with Id: " + id);  
    if (ans) {  
        this.reiPaymentTransactionService.deleteREIPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  REI Payment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REIPaymentTransaction>(ReipaymenttransctioncreateComponent, 
      new REIPaymentTransaction(),
      'Create REI Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIPaymentTransaction>(ReipaymenttransctiondetailComponent,
      this.reiPaymentData.find(each => each.Id == id),
      "REI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIPaymentTransaction>(ReipaymenttransctioncreateComponent,
      this.reiPaymentData.find(each => each.Id == id),
      "REI Payment Edit");
  }

}
