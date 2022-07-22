import { Component, OnInit } from '@angular/core';
import { PvepensescreateComponent } from './../pvepensescreate/pvepensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { PvepensesdetailComponent } from './../pvepensesdetail/pvepensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { PVExpenses } from './../../../../entity/models/PersonalVehicle/pvexpenses';
import { PVExpensesService } from './../../../../services/api-service/PersonalVehicleService/pvexpenses.service';
@Component({
  selector: 'app-pvepenseslist',
  templateUrl: './pvepenseslist.component.html',
  styleUrls: ['./pvepenseslist.component.css']
})
export class PvepenseslistComponent implements OnInit {
  pvExpenseData: PVExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private pvExpensesService:PVExpensesService) {}

  ngOnInit(): void {}
  title: string = 'Persoanl Vehicle Expense List';

  onGetPVExpenseList(): any{
    this.pvExpensesService.getPVExpenseList().subscribe(
      (response)=> response.map(response=>{
        return this.pvExpenseData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  PVExpense list") 
    );
    console.log(this.pvExpenseData)
  }
  onGetSinglePVExpense(id:number): any{
    this.pvExpensesService.getPVExpensesById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  PVExpense by id '));
    
  }
  getPVExpenseTransactionById(id:number): any {  
    var ans = confirm("Do you want to delete  PVExpense with Id: " + id);  
    if (ans) {  
        this.pvExpensesService.deletePVExpensesById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  PVExpense')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}
    
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<PVExpenses>(PvepensescreateComponent, 
      new PVExpenses(),
      'Create PV Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVExpenses>(PvepensesdetailComponent,
      this.pvExpenseData.find(each => each.Id == id),
      "PV Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<PVExpenses>(PvepensescreateComponent,
      this.pvExpenseData.find(each => each.Id == id),
      "PV Expense Edit");
  }
}
