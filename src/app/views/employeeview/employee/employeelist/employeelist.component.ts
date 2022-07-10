import { Component, OnInit } from '@angular/core';
import { EmployeecreateComponent } from './../employeecreate/employeecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private genericModalPopUpService: GenericModalPopUpService) {}

  ngOnInit(): void {}
  title: string = 'Employee Lists';

  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(EmployeecreateComponent, {
      title: 'Create Employee',
    });
  }

}
