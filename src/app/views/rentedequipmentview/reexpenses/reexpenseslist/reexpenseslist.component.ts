import { Component, OnInit } from '@angular/core';
import { ReexpensescreateComponent } from './../reexpensescreate/reexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ReexpensesdetailComponent } from './../reexpensesdetail/reexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { REExpenses } from 'src/app/entity/models/RentedEquipment/reexpenses';
import { REExpensesService } from './../../../../services/api-service/RentedEquipmentService/reexpenses.service';
@Component({
  selector: 'app-reexpenseslist',
  templateUrl: './reexpenseslist.component.html',
  styleUrls: ['./reexpenseslist.component.css']
})
export class ReexpenseslistComponent implements OnInit {
  reExpenseData: REExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private reExpensesService:REExpensesService) {}

  ngOnInit(): void {}
  title: string = 'RE Expense List';

  
  onGetREEList(): any{
    this.reExpensesService.getREExpenseList().subscribe(
      (response)=> response.map(response=>{
        return this.reExpenseData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  REE  list") 
    );
    console.log(this.reExpenseData)
  }
  onGetSingleREE(id:number): any{
    this.reExpensesService.getREExpensesById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  REE  by id '));
    
  }
  getREEById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.reExpensesService.deleteREExpensesById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  REE ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<REExpenses>(ReexpensescreateComponent, 
      new REExpenses(),
      'Create RE Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REExpenses>(ReexpensesdetailComponent,
      this.reExpenseData.find(each => each.Id == id),
      "RE Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<REExpenses>(ReexpensescreateComponent,
      this.reExpenseData.find(each => each.Id == id),
      "RE Expense Edit");
  }

}
