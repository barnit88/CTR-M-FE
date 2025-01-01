import { Component, OnInit } from '@angular/core';
import { PeepaymenttransctioncreateComponent } from './../peepaymenttransctioncreate/peepaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeepaymenttransctiondetailComponent } from './../peepaymenttransctiondetail/peepaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEEPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peepayment-transaction';
import { PEEPaymentTransactionService } from './../../../../services/api-service/PersonalEquipmentService/peepayment-transaction.service';
@Component({
  selector: 'app-peepaymenttransctionlist',
  templateUrl: './peepaymenttransctionlist.component.html',
  styleUrls: ['./peepaymenttransctionlist.component.css']
})
export class PeepaymenttransctionlistComponent implements OnInit {
  title: string = 'PEE Payemnt Transction List';
  peePaymentData: PEEPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private peePaymentTransactionService: PEEPaymentTransactionService) {}

  ngOnInit(): void {}

  onGetPEEPaymentList(): any{
    this.peePaymentTransactionService.getPEExpensePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.peePaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PEE Payment list") 
    );
    console.log(this.peePaymentData)
  }
  onGetSinglePEEPayment(id:number): any{
    this.peePaymentTransactionService.getPEEPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single PEE Payment by id ')
    );
  }
  onDeletePEEPayment(id:number): any {  
    var ans = confirm("Do you want to delete Payment with Id: " + id);  
    if (ans) {  
        this.peePaymentTransactionService.deletePEEPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting PEE Payment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}



  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEEPaymentTransaction>(PeepaymenttransctioncreateComponent, 
      new PEEPaymentTransaction(),
      'Create PEE Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEEPaymentTransaction>(PeepaymenttransctiondetailComponent,
      this.peePaymentData.find(each => each.Id == id),
      "PEE Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEEPaymentTransaction>(PeepaymenttransctioncreateComponent,
      this.peePaymentData.find(each => each.Id == id),
      "PEE Payment Edit");
  }
}
