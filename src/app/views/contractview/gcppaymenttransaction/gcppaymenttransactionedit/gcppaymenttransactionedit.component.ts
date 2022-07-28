import { Component, OnInit } from '@angular/core';
import { GCPaymentTransaction } from 'src/app/entity/models/Contract/gcpayment-transaction';
import { IComponent } from 'src/app/views/IComponent';

@Component({
  selector: 'app-gcppaymenttransactionedit',
  templateUrl: './gcppaymenttransactionedit.component.html',
  styleUrls: ['./gcppaymenttransactionedit.component.css']
})
export class GcppaymenttransactioneditComponent implements OnInit, IComponent<GCPaymentTransaction> {
  title: string;
  data: GCPaymentTransaction | GCPaymentTransaction[];
  constructor() { }

  ngOnInit(): void {
  }

}
