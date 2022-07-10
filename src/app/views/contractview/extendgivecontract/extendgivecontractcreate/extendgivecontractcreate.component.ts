import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extendgivecontractcreate',
  templateUrl: './extendgivecontractcreate.component.html',
  styleUrls: ['./extendgivecontractcreate.component.css']
})
export class ExtendgivecontractcreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  OpenModalPopUp() {
    this.genericModalPopUpService.openDetailModal(ClientcreateComponent, {
      title: 'Create Client',
    });
  }

}
