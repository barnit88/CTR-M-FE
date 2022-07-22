import {Component, OnInit} from '@angular/core';
import {GenericModalPopUpService} from 'src/app/services/common-service/generic.modal.popup.service';
import {LabourcreateComponent} from './../labourcreate/labourcreate.component';
import {LabourdetailComponent} from './../labourdetail/labourdetail.component';
import {GenericDetailPopUpService} from 'src/app/services/common-service/generic.detail.popup.service';
import {LabourService} from './../../../../services/api-service/LabourService/labour.service';
import {Labour} from './../../../../entity/models/Labour/labour';

@Component({selector: 'app-labourlist', templateUrl: './labourlist.component.html', styleUrls: ['./labourlist.component.css']})
export class LabourlistComponent implements OnInit {
    labour : Labour[] = [];
    title : string = 'Labour List';
    constructor(private labourService : LabourService, private genericModalPopUpService : GenericModalPopUpService, private genericDetailPopUpService : GenericDetailPopUpService) {}

    ngOnInit(): void { // this.onGetLabour();
    }

    onGetLabourList(): any{
      this.labourService.getLabourList().subscribe(
        (response)=> response.map(response=>{
          return this.labour.push(response)
        }),
        (error:any)=> console.log(error),
        ()=> console.log("Done with fetching Labour  list") 
      );
      console.log(this.labour)
    }
    onGetSingleLabour(id:number): any{
      this.labourService.getLabourById(id).subscribe(
        (response)=> console.log(response),
        (error:any)=> console.log(error),
        ()=> console.log('done with geeting single Labour  by id ')
      );
    }
    
    onDeleteLabour(id:number): any {  
      var ans = confirm("Do you want to delete customer with Id: " + id);  
      if (ans) {  
          this.labourService.deleteLabourById(id).subscribe((data: any) => { 
            console.log('Sucess on deleting Labour ')
          }, (error: any) => console.error(error))  
      } else return this.ngOnInit();
  }  

    OpenModalPopUp() {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourcreateComponent, 
        new Labour(),
        'Create Labour  List',
      );
    }
    //function for details popup
    OpenDetailPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourdetailComponent,
        this.labour.find(each => each.Id == id),
        "Labour  Details");
    }
  
    OpenEditPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourcreateComponent,
        this.labour.find(each => each.Id == id),
        "Labour  Edit");
    }
}

