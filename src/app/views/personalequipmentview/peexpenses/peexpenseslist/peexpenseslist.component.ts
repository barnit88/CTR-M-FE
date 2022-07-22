import { Component, OnInit } from '@angular/core';
import { PeexpensescreateComponent } from './../peexpensescreate/peexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PeexpensesdetailComponent } from './../peexpensesdetail/peexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PEExpenses } from './../../../../entity/models/PersonalEquipment/peexpenses';
import { PEExpensesService } from './../../../../services/api-service/PersonalEquipmentService/peexpenses.service';
@Component({
  selector: 'app-peexpenseslist',
  templateUrl: './peexpenseslist.component.html',
  styleUrls: ['./peexpenseslist.component.css']
})
export class PeexpenseslistComponent implements OnInit {
  peExpenseData: PEExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private pEExpensesService:PEExpensesService) {}

  ngOnInit(): void {}
  title: string = 'PE Expense List';

  onGetPEExpenseList(): any{
    this.pEExpensesService.getPEExpenseList().subscribe(
      (response)=> response.map(response=>{
        return this.peExpenseData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching PEExpense list") 
    );
    console.log(this.peExpenseData)
  }
  onGetSinglePEExpense(id:number): any{
    this.pEExpensesService.getPEExpensesById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single PEExpense by id ')
    );
  }
  onDeletePEExpense(id:number): any {  
    var ans = confirm("Do you want to delete PEExpense with Id: " + id);  
    if (ans) {  
        this.pEExpensesService.deletePEExpensesById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting MaSPayment')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PEExpenses>(PeexpensescreateComponent, 
      new PEExpenses(),
      'Create PE Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEExpenses>(PeexpensesdetailComponent,
      this.peExpenseData.find(each => each.Id == id),
      "PE Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PEExpenses>(PeexpensescreateComponent,
      this.peExpenseData.find(each => each.Id == id),
      "PE Expense Edit");
  }

}
