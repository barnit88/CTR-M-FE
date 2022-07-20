import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourcreateComponent } from './../labourcreate/labourcreate.component';
import { LabourdetailComponent } from './../labourdetail/labourdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { LabourService } from './../../../../services/api-service/LabourService/labour.service';
import { Labour } from './../../../../entity/models/Labour/labour';

@Component({
  selector: 'app-labourlist',
  templateUrl: './labourlist.component.html',
  styleUrls: ['./labourlist.component.css']
})
export class LabourlistComponent implements OnInit {
  labour: Labour[]=[];
  constructor(private labourService:LabourService, private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {
    this.onGetLabour();
  }
  title: string = 'Labour List';

  onGetLabour(): any{
    this.labourService.getLabours().subscribe(
      (response)=> response.map(res=>{
        return this.labour.push(res)
      }),
      (error:any)=> console.log(error),
      );
  } 

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(LabourcreateComponent, {
      title: 'Create Labour',
    });
  }
  OpenDetailPopUp() {
    this.genericDetailPopUpService.openDetailModal(LabourdetailComponent,{
      title:" Labour  Details"
    });
  }
}
