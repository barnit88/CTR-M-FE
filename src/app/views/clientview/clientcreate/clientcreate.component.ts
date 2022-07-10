import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientcreate',
  templateUrl: './clientcreate.component.html',
  styleUrls: ['./clientcreate.component.css'],
})
export class ClientcreateComponent implements OnInit {
  title: any = 'Client Create';
  data: any;
  constructor() {}

  ngOnInit(): void {}

  check(event: any) {
    console.log('ello Mcasdad');
    alert('ello Mcasdad');
  }
}
