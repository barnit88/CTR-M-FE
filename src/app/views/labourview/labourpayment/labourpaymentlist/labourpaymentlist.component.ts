import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourpaymentcreateComponent } from './../labourpaymentcreate/labourpaymentcreate.component';
import { LabourpaymentdetailComponent } from './../labourpaymentdetail/labourpaymentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { LabourService } from './../../../../services/api-service/LabourService/labour.service';
import { LabourPayment } from './../../../../entity/models/Labour/labour-payment';
import { pipe } from 'rxjs';
import { LabourPaymentService } from './../../../../services/api-service/LabourService/labour-payment.service';

@Component({
  selector: 'app-labourpaymentlist',
  templateUrl: './labourpaymentlist.component.html',
  styleUrls: ['./labourpaymentlist.component.css']
})
export class LabourpaymentlistComponent implements OnInit {
  labourPaymentData: LabourPayment[]=[];
  title: string='Labour Payment'
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private labourPaymentService:LabourPaymentService ){ }

  ngOnInit(): void {
  }
  onGetLabourPayment(): any{
    this.labourPaymentService.getLabourPaymentList().subscribe(
      (data: any)=> console.log(data),
      (error:any)=> console.log(error),
      ()=> console.log('Done with getting labour payment list')
    );
    return true;
  } 

  onGetLabourList(): any{
    this.labourPaymentService.getLabourPaymentList().subscribe(
      (response)=> response.map(response=>{
        return this.labourPaymentData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Labour payment list") 
    );
    console.log(this.labourPaymentData)
  }
  onGetSingleLabour(id:number): any{
    this.labourPaymentService.getLabourPaymentById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Labour payment by id ')
    );
  }
  
  onDeleteLabour(id:number): any {  
    var ans = confirm("Do you want to delete customer with Id: " + id);  
    if (ans) {  
        this.labourPaymentService.deleteLabourPaymentById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting employee payment')
        }, (error: any) => console.error(error))  
    } else return
    this.ngOnInit();
}  

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<LabourPayment>(LabourpaymentcreateComponent, 
      new LabourPayment(),
      'Create Labour payment List',
    );
  }

  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<LabourPayment>(LabourpaymentdetailComponent,
      this.labourPaymentData.find(each => each.Id == id),
      "Labour Payment Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<LabourPayment>(LabourpaymentcreateComponent,
      this.labourPaymentData.find(each => each.Id == id),
      "Labour Payment Edit");
  }

}


