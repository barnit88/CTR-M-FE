import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourcreateComponent } from './../labourcreate/labourcreate.component';
import { LabourdetailComponent } from './../labourdetail/labourdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';

@Component({
  selector: 'app-labourlist',
  templateUrl: './labourlist.component.html',
  styleUrls: ['./labourlist.component.css']
})
export class LabourlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService, private genericDetailPopUpService: GenericDetailPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Labour List';

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
