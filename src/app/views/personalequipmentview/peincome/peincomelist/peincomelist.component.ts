import { Component, OnInit } from '@angular/core';
import { PeincomecreateComponent } from './../peincomecreate/peincomecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeincomedetailComponent } from './../peincomedetail/peincomedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEIncome } from './../../../../entity/models/PersonalEquipment/peincome';
import { PEIncomeService } from './../../../../services/api-service/PersonalEquipmentService/peincome.service';
@Component({
  selector: 'app-peincomelist',
  templateUrl: './peincomelist.component.html',
  styleUrls: ['./peincomelist.component.css']
})
export class PeincomelistComponent implements OnInit {
  peIncomeData: PEIncome[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private peIncomeService:PEIncomeService) {}

  ngOnInit(): void {}
  title: string = 'PE Income List';


  onGetPEIncomeList(): any{
    this.peIncomeService.getPEIncomeList().subscribe(
      (response)=> response.map(response=>{
        return this.peIncomeData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching PE Income list") 
    );
    console.log(this.peIncomeData)
  }
  onGetSinglePEIncome(id:number): any{
    this.peIncomeService.getPEIncomeById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single PE Income by id ')
    );
  }
  onDeletePEIncome(id:number): any {  
    var ans = confirm("Do you want to delete PE Income with Id: " + id);  
    if (ans) {  
        this.peIncomeService.deletePEIncomeById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting PE Income')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEIncome>(PeincomecreateComponent, 
      new PEIncome(),
      'Create PE Income List',
    );
  }
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIncome>(PeincomedetailComponent,
      this.peIncomeData.find(each => each.Id == id),
      "PE Income Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEIncome>(PeincomecreateComponent,
      this.peIncomeData.find(each => each.Id == id),
      "PE Income Edit");
  }

}
