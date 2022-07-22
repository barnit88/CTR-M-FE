import { Component, OnInit } from '@angular/core';
import { PeipaymenttransactioncreateComponent } from './../peipaymenttransactioncreate/peipaymenttransactioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeipaymenttransactiondetailComponent } from './../peipaymenttransactiondetail/peipaymenttransactiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEIPaymentTransaction } from './../../../../entity/models/PersonalEquipment/peipayment-transaction';
import { PEIPaymentTransctionService } from './../../../../services/api-service/PersonalEquipmentService/peipayment-transction.service';
@Component({
  selector: 'app-peipaymenttransactionlist',
  templateUrl: './peipaymenttransactionlist.component.html',
  styleUrls: ['./peipaymenttransactionlist.component.css']
})
export class PeipaymenttransactionlistComponent implements OnInit {
  peiPaymentData: PEIPaymentTransaction[]=[];
  title: string = 'Personal Equipment Income Payments Transactions';
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private peiPaymentTransctionService: PEIPaymentTransctionService) {}

  ngOnInit(): void {}

  onGetPaymentList(): any{
    this.peiPaymentTransctionService.getPEIncomePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.peiPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching PEI Payment list") 
    );
    console.log(this.peiPaymentData)
  }
  onGetSinglePayment(id:number): any{
    this.peiPaymentTransctionService.getPEIPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single PEI Payment by id ')
    );
  }
  onDeletePayment(id:number): any {  
    var ans = confirm("Do you want to delete PEI Payment with Id: " + id);  
    if (ans) {  
        this.peiPaymentTransctionService.deletePEIPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting PEI Payment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEIPaymentTransaction>(PeipaymenttransactioncreateComponent, 
      new PEIPaymentTransaction(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIPaymentTransaction>(PeipaymenttransactiondetailComponent,
      this.peiPaymentData.find(each => each.Id == id),
      "PEI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIPaymentTransaction>(PeipaymenttransactioncreateComponent,
      this.peiPaymentData.find(each => each.Id == id),
      "PEI payment Edit");
  }
}
