import { Component, OnInit } from '@angular/core';
import { LabourcreateComponent } from './../labourcreate/labourcreate.component';

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
