import { Component, OnInit } from '@angular/core';
import { RvincomecreateComponent } from './../rvincomecreate/rvincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvincomedetailComponent } from './../rvincomedetail/rvincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVIncome } from './../../../../entity/models/RentedVehicle/rvincome';
import { RVIncomeService } from './../../../../services/api-service/RentedVehicleService/rvincome.service';
@Component({
  selector: 'app-rvincomelist',
  templateUrl: './rvincomelist.component.html',
  styleUrls: ['./rvincomelist.component.css']
})
export class RvincomelistComponent implements OnInit {
  rviData: RVIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private rvIncomeService:RVIncomeService) {}

  ngOnInit(): void {}
  title: string = 'Rented vehicle Income List';

  onGetRVIList(): any{
    this.rvIncomeService.getRVIncomeList().subscribe(
      (response)=> response.map(response=>{
        return this.rviData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RVI  list") 
    );
    console.log(this.rviData)
  }
  onGetSingleRVI(id:number): any{
    this.rvIncomeService.getRVIncomeById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVI  by id '));
    
  }
  getRVIById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.rvIncomeService.deleteRVIncomeById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVI ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVIncome>(RvincomecreateComponent, 
      new RVIncome(),
      'Create RV Income List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIncome>(RvincomedetailComponent,
      this.rviData.find(each => each.Id == id),
      "RV Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVIncome>(RvincomecreateComponent,
      this.rviData.find(each => each.Id == id),
      "RV Income Edit");
  }
}
