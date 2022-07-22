import { Component, OnInit } from '@angular/core';
import { ReincomecreateComponent } from './../reincomecreate/reincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RentedequipmentdetailComponent } from './../../rentedequipment/rentedequipmentdetail/rentedequipmentdetail.component';
import { ReincomedetailComponent } from './../reincomedetail/reincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REIncome } from 'src/app/entity/models/RentedEquipment/reincome';
import { REIncomeService } from './../../../../services/api-service/RentedEquipmentService/reincome.service';
@Component({
  selector: 'app-reincomelist',
  templateUrl: './reincomelist.component.html',
  styleUrls: ['./reincomelist.component.css']
})
export class ReincomelistComponent implements OnInit {
  reiData: REIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private reIncomeService:REIncomeService) {}

  ngOnInit(): void {}
  title: string = 'Rented Equipment Income List';

  onGetREIList(): any{
    this.reIncomeService.getREIncomeList().subscribe(
      (response)=> response.map(response=>{
        return this.reiData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  REI  list") 
    );
    console.log(this.reiData)
  }
  onGetSingleREI(id:number): any{
    this.reIncomeService.getREIncomeById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  REI  by id '));
    
  }
  getREIById(id:number): any {  
    var ans = confirm("Do you want to delete  REI  with Id: " + id);  
    if (ans) {  
        this.reIncomeService.deleteREIncomeById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  REI ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REIncome>(ReincomecreateComponent, 
      new REIncome(),
      'Create RE Income List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIncome>(ReincomedetailComponent,
      this.reiData.find(each => each.Id == id),
      "RE Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REIncome>(ReincomecreateComponent,
      this.reiData.find(each => each.Id == id),
      "RE Income Edit");
  }
}
