import { Component, OnInit } from '@angular/core';
import { PebpaymenttransctioncreateComponent } from './../pebpaymenttransctioncreate/pebpaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PebpaymenttransctiondetailComponent } from './../pebpaymenttransctiondetail/pebpaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEBPaymentTransaction } from './../../../../entity/models/PersonalEquipment/pebpayment-transaction';
import { PEBPaymentTransactionService } from './../../../../services/api-service/PersonalEquipmentService/pebpayment-transaction.service';
@Component({
  selector: 'app-pebpaymenttransctionlist',
  templateUrl: './pebpaymenttransctionlist.component.html',
  styleUrls: ['./pebpaymenttransctionlist.component.css']
})
export class PebpaymenttransctionlistComponent implements OnInit {
  pebPaymentData: PEBPaymentTransaction[]=[];
  title: string = 'Material List';
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private pebPaymentTransactionService: PEBPaymentTransactionService) {}

  ngOnInit(): void {}

  onGetPaymentList(): any{
    this.pebPaymentTransactionService.getPEBoughtPaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.pebPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Payment list") 
    );
    console.log(this.pebPaymentData)
  }
  onGetSinglePayment(id:number): any{
    this.pebPaymentTransactionService.getPEBPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Payment by id ')
    );
  }
  onDeletePayment(id:number): any {  
    var ans = confirm("Do you want to delete Payment with Id: " + id);  
    if (ans) {  
        this.pebPaymentTransactionService.deletePEBPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting MaSPayment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEBPaymentTransaction>(PebpaymenttransctioncreateComponent, 
      new PEBPaymentTransaction(),
      'Create Employee payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBPaymentTransaction>(PebpaymenttransctiondetailComponent,
      this.pebPaymentData.find(each => each.Id == id),
      "Employee Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEBPaymentTransaction>(PebpaymenttransctioncreateComponent,
      this.pebPaymentData.find(each => each.Id == id),
      "Employee Payment Edit");
  }
}
