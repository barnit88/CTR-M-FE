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

 

    OpenModalPopUp() {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourcreateComponent, 
        new Labour(),
        'Create Employee payment List',
      );
    }
    //function for details popup
    OpenDetailPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourdetailComponent,
        this.labour.find(each => each.Id == id),
        "Employee Payment Details");
    }
  
    OpenEditPopUp(id: number) {
      this.genericModalPopUpService.openModalPopUpService<Labour>(LabourcreateComponent,
        this.labour.find(each => each.Id == id),
        "Employee Payment Edit");
    }
}

