import { Component, OnInit } from '@angular/core';
import { PvincomecreateComponent } from './../pvincomecreate/pvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvincomedetailComponent } from './../pvincomedetail/pvincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVIncome } from 'src/app/entity/models/PersonalVehicle/pvincome';
import { PVIncomeService } from './../../../../services/api-service/PersonalVehicleService/pvincome.service';
@Component({
  selector: 'app-pvincomelist',
  templateUrl: './pvincomelist.component.html',
  styleUrls: ['./pvincomelist.component.css']
})
export class PvincomelistComponent implements OnInit {
  pvIncomeData: PVIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private pvIncomeService:PVIncomeService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Income List';

  onGetPVIncomeList(): any{
    this.pvIncomeService.getPVIncomeList().subscribe(
      (response)=> response.map(response=>{
        return this.pvIncomeData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PVIncome list") 
    );
    console.log(this.pvIncomeData)
  }
  onGetSinglePVIncome(id:number): any{
    this.pvIncomeService.getPVIncomeById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  PVIncome by id '));
    
  }
  getPVIncomeTransactionById(id:number): any {  
    var ans = confirm("Do you want to delete  PVBPayment with Id: " + id);  
    if (ans) {  
        this.pvIncomeService.deletePVIncomeById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  PVIncome')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVIncome>(PvincomecreateComponent, 
      new PVIncome(),
      'Create PV Income List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIncome>(PvincomedetailComponent,
      this.pvIncomeData.find(each => each.Id == id),
      "PV Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVIncome>(PvincomecreateComponent,
      this.pvIncomeData.find(each => each.Id == id),
      "PV Income Edit");
  }
}
