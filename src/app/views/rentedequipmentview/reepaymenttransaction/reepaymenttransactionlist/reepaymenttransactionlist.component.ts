import { Component, OnInit } from '@angular/core';
import { ReepaymenttransactioncreateComponent } from './../reepaymenttransactioncreate/reepaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReepaymenttransactiondetailComponent } from './../reepaymenttransactiondetail/reepaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REEPaymentTransaction } from './../../../../entity/models/RentedEquipment/reepayment-transaction';
import { REEPaymentTransactionService } from './../../../../services/api-service/RentedEquipmentService/reepayment-transaction.service';
@Component({
  selector: 'app-reepaymenttransactionlist',
  templateUrl: './reepaymenttransactionlist.component.html',
  styleUrls: ['./reepaymenttransactionlist.component.css']
})
export class ReepaymenttransactionlistComponent implements OnInit {
  reePaymentData: REEPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private reePaymentTransactionService:REEPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'REE Payment Transaction List';

  onGetREEPaymentList(): any{
    this.reePaymentTransactionService.getREExpensePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.reePaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  REE Payment list") 
    );
    console.log(this.reePaymentData)
  }
  onGetSingleREEPayment(id:number): any{
    this.reePaymentTransactionService.getREEPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  REE Payment by id '));
    
  }
  getREEPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  REEPayment with Id: " + id);  
    if (ans) {  
        this.reePaymentTransactionService.deleteREEPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  REE Payment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REEPaymentTransaction>(ReepaymenttransactioncreateComponent, 
      new REEPaymentTransaction(),
      'Create REE Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REEPaymentTransaction>(ReepaymenttransactiondetailComponent,
      this.reePaymentData.find(each => each.Id == id),
      "REE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REEPaymentTransaction>(ReepaymenttransactioncreateComponent,
      this.reePaymentData.find(each => each.Id == id),
      "REE Payment Edit");
  }

}
