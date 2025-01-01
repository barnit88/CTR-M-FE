import { Component, OnInit } from '@angular/core';
import { PvipaymenttransctioncreateComponent } from './../pvipaymenttransctioncreate/pvipaymenttransctioncreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvipaymenttransctiondetailComponent } from './../pvipaymenttransctiondetail/pvipaymenttransctiondetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVIPaymentTransaction } from './../../../../entity/models/PersonalVehicle/pvipayment-transaction';
import { PVIPaymentTransactionService } from './../../../../services/api-service/PersonalVehicleService/pvipayment-transaction.service';
@Component({
  selector: 'app-pvipaymenttransctionlist',
  templateUrl: './pvipaymenttransctionlist.component.html',
  styleUrls: ['./pvipaymenttransctionlist.component.css']
})
export class PvipaymenttransctionlistComponent implements OnInit {
  pviPaymentData: PVIPaymentTransaction[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private pviPaymentTransactionService:PVIPaymentTransactionService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income Transaction List';

  onGetPVIPaymentList(): any{
    this.pviPaymentTransactionService.getPVIncomePaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.pviPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PVIPayment list") 
    );
    console.log(this.pviPaymentData)
  }
  onGetSinglePVIPayment(id:number): any{
    this.pviPaymentTransactionService.getPVIPaymentTransactionById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  PVIPayment by id '));
    
  }
  getPVIPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  PVIPayment with Id: " + id);  
    if (ans) {  
        this.pviPaymentTransactionService.deletePVIPaymentTransactionById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  PVIPayment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVIPaymentTransaction>(PvipaymenttransctioncreateComponent, 
      new PVIPaymentTransaction(),
      'Create PVI Payment List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIPaymentTransaction>(PvipaymenttransctiondetailComponent,
      this.pviPaymentData.find(each => each.Id == id),
      "PVI Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIPaymentTransaction>(PvipaymenttransctioncreateComponent,
      this.pviPaymentData.find(each => each.Id == id),
      "PVI Payment Edit");
  }
}
