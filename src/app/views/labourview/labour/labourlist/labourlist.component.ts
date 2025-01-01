import {Component, OnInit} from '@angular/core';
import {GenericModalPopUpService} from 'src/app/services/common-service/generic.modal.popup.service';
import {LabourcreateComponent} from './../labourcreate/labourcreate.component';
import {LabourdetailComponent} from './../labourdetail/labourdetail.component';
import {GenericDetailPopUpService} from 'src/app/services/common-service/generic.detail.popup.service';
import {LabourService} from './../../../../services/api-service/LabourService/labour.service';
import {Labour} from './../../../../entity/models/Labour/labour';

@Component({selector: 'app-labourlist', templateUrl: './labourlist.component.html', styleUrls: ['./labourlist.component.css']})
export class LabourlistComponent implements OnInit {
    labours : Labour[] = [];
    title : string = 'Labour List';
    deleted: boolean=false;
    constructor(private labourService : LabourService, private genericModalPopUpService : GenericModalPopUpService, private genericDetailPopUpService : GenericDetailPopUpService) {}

    ngOnInit(): void { this.onGetLabourList();
    }
    ngDoCheck() {
    }

  
    onGetLabourList(): any{
      this.labourService.getLabourList().subscribe(
        (response)=> this.labours= response,
        (error:any)=> console.log(error),
        ()=> console.log("Done with fetching Labours  list"+this.labours[0].FirstName) 
      );
      console.log(this.labours)
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
      } else return;  
  }  

    OpenModalPopUp() {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourcreateComponent, 
        new Labour(),
        'Create Labour  List',
      );
    }
    
    OpenDetailPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourdetailComponent,
        this.labours.find(each => each.Id == id),
        "Labour  Details");
    }
  
    OpenEditPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourcreateComponent,
        this.labours.find(each => each.Id == id),
        "Labour  Edit");
    }
}

