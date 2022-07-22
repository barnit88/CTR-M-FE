import { Component, OnInit } from '@angular/core';
import { RvexpensescreateComponent } from './../rvexpensescreate/rvexpensescreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { RvexpensesdetailComponent } from './../rvexpensesdetail/rvexpensesdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { RVExpenses } from 'src/app/entity/models/RentedVehicle/rvexpenses';
import { RVExpensesService } from './../../../../services/api-service/RentedVehicleService/rvexpenses.service';
@Component({
  selector: 'app-rvexpenseslist',
  templateUrl: './rvexpenseslist.component.html',
  styleUrls: ['./rvexpenseslist.component.css']
})
export class RvexpenseslistComponent implements OnInit {
  rveData: RVExpenses[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private rvExpensesService:RVExpensesService) {}

  ngOnInit(): void {}
  title: string = 'Rented Vehicle Expense List';

  onGetRVEList(): any{
    this.rvExpensesService.getRVExpenseList().subscribe(
      (response)=> response.map(response=>{
        return this.rveData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Dog with fetching  RVE  list") 
    );
    console.log(this.rveData)
  }
  onGetSingleRVE(id:number): any{
    this.rvExpensesService.getRVExpensesById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVE  by id '));
    
  }
  getRVEById(id:number): any {  
    var ans = confirm("Do you want to delete  RVE  with Id: " + id);  
    if (ans) {  
        this.rvExpensesService.deleteRVExpensesById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVE ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<RVExpenses>(RvexpensescreateComponent, 
      new RVExpenses(),
      'Create RV Expense List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVExpenses>(RvexpensesdetailComponent,
      this.rveData.find(each => each.Id == id),
      "RV Expense Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<RVExpenses>(RvexpensescreateComponent,
      this.rveData.find(each => each.Id == id),
      "RV Expense Edit");
  }

}
