import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourpaymentcreateComponent } from './../labourpaymentcreate/labourpaymentcreate.component';
import { LabourpaymentdetailComponent } from './../labourpaymentdetail/labourpaymentdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { LabourService } from './../../../../services/api-service/LabourService/labour.service';
import { LabourPayment } from './../../../../entity/models/Labour/labour-payment';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-labourpaymentlist',
  templateUrl: './labourpaymentlist.component.html',
  styleUrls: ['./labourpaymentlist.component.css']
})
export class LabourpaymentlistComponent implements OnInit {
  labourPayment: LabourPayment[]=[];
  title: string='Labour Payment'
  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService, private labourService:LabourService ){ }
  ngOnInit(): void {
  }
  onGetLabourPayment(): any{
    this.labourService.getLabours().subscribe(
      (response)=> response.map((res, index )=> {return console.log(res)}),
      (error:any)=> console.log(error)
    );
  } 
  OpenModalPopUp(){
    this.genericModalPopUpService.openDetailModal(LabourpaymentcreateComponent, {
      title:" Create Labour Payment"
    })
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(LabourpaymentdetailComponent,{
      title:" Labour Payement Details"
    });
  }

}


