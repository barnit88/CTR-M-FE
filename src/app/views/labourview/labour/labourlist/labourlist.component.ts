import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LabourcreateComponent } from './../labourcreate/labourcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-labourlist',
  templateUrl: './labourlist.component.html',
  styleUrls: ['./labourlist.component.css']
})
export class LabourlistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Labour List';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(LabourcreateComponent, {
      title: 'Create Labour',
    });
  }
}
