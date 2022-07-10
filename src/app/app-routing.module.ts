import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './views/admin/admin.component';
import { ClientlistComponent } from './views/clientview/clientlist/clientlist.component';
import { ExtendgivecontractlistComponent } from './views/contractview/extendgivecontract/extendgivecontractlist/extendgivecontractlist.component';
import { ExtendtakecontractlistComponent } from './views/contractview/extendtakecontract/extendtakecontractlist/extendtakecontractlist.component';
import { GcppaymenttransactionlistComponent } from './views/contractview/gcppaymenttransaction/gcppaymenttransactionlist/gcppaymenttransactionlist.component';
import { GivecontractlistComponent } from './views/contractview/givecontract/givecontractlist/givecontractlist.component';
import { TakecontractlistComponent } from './views/contractview/takecontract/takecontractlist/takecontractlist.component';
import { TcppaymenttransactionlistComponent } from './views/contractview/tcppaymenttransaction/tcppaymenttransactionlist/tcppaymenttransactionlist.component';
import { EmployeelistComponent } from './views/employeeview/employee/employeelist/employeelist.component';
import { EmployeepaymentlistComponent } from './views/employeeview/employeepayment/employeepaymentlist/employeepaymentlist.component';
import { LabourlistComponent } from './views/labourview/labour/labourlist/labourlist.component';
import { LabourpaymentlistComponent } from './views/labourview/labourpayment/labourpaymentlist/labourpaymentlist.component';
import { LaboursitelistComponent } from './views/labourview/laboursite/laboursitelist/laboursitelist.component';
import { MateriallistComponent } from './views/materialview/material/materiallist/materiallist.component';
import { MaterialboughtlistComponent } from './views/materialview/materialbought/materialboughtlist/materialboughtlist.component';
import { MaterialsoldlistComponent } from './views/materialview/materialsold/materialsoldlist/materialsoldlist.component';
import { MaterialstocklistComponent } from './views/materialview/materialstock/materialstocklist/materialstocklist.component';
import { MaterialusedlistComponent } from './views/materialview/materialused/materialusedlist/materialusedlist.component';
import { MbpaymenttransacionlistComponent } from './views/materialview/mbpaymenttransaction/mbpaymenttransacionlist/mbpaymenttransacionlist.component';
import { MspaymenttransactionlistComponent } from './views/materialview/mspaymenttransaction/mspaymenttransactionlist/mspaymenttransactionlist.component';
import { PeboughtlistComponent } from './views/personalequipmentview/pebought/peboughtlist/peboughtlist.component';
import { PebpaymenttransctionlistComponent } from './views/personalequipmentview/pebpaymenttransction/pebpaymenttransctionlist/pebpaymenttransctionlist.component';
import { PeepaymenttransctionlistComponent } from './views/personalequipmentview/peepaymenttransction/peepaymenttransctionlist/peepaymenttransctionlist.component';
import { PeexpenseslistComponent } from './views/personalequipmentview/peexpenses/peexpenseslist/peexpenseslist.component';
import { PeincomelistComponent } from './views/personalequipmentview/peincome/peincomelist/peincomelist.component';
import { PeipaymenttransactionlistComponent } from './views/personalequipmentview/peipaymenttransaction/peipaymenttransactionlist/peipaymenttransactionlist.component';
import { PersonalequipmentlistComponent } from './views/personalequipmentview/personalequipment/personalequipmentlist/personalequipmentlist.component';
import { PersonalvehiclelistComponent } from './views/personalvehicleview/personalvehicle/personalvehiclelist/personalvehiclelist.component';
import { PvboughtlistComponent } from './views/personalvehicleview/pvbought/pvboughtlist/pvboughtlist.component';
import { PvbpaymenttransactionlistComponent } from './views/personalvehicleview/pvbpaymenttransaction/pvbpaymenttransactionlist/pvbpaymenttransactionlist.component';
import { PvepaymenttransactionlistComponent } from './views/personalvehicleview/pvepaymenttransaction/pvepaymenttransactionlist/pvepaymenttransactionlist.component';
import { PvepenseslistComponent } from './views/personalvehicleview/pvepenses/pvepenseslist/pvepenseslist.component';
import { PvincomelistComponent } from './views/personalvehicleview/pvincome/pvincomelist/pvincomelist.component';
import { PvipaymenttransctionlistComponent } from './views/personalvehicleview/pvipaymenttransction/pvipaymenttransctionlist/pvipaymenttransctionlist.component';
import { ReepaymenttransactionlistComponent } from './views/rentedequipmentview/reepaymenttransaction/reepaymenttransactionlist/reepaymenttransactionlist.component';
import { ReexpenseslistComponent } from './views/rentedequipmentview/reexpenses/reexpenseslist/reexpenseslist.component';
import { ReincomelistComponent } from './views/rentedequipmentview/reincome/reincomelist/reincomelist.component';
import { ReipaymenttransctionlistComponent } from './views/rentedequipmentview/reipaymenttransction/reipaymenttransctionlist/reipaymenttransctionlist.component';
import { RentedequipmentlistComponent } from './views/rentedequipmentview/rentedequipment/rentedequipmentlist/rentedequipmentlist.component';
import { RerentlistComponent } from './views/rentedequipmentview/rerent/rerentlist/rerentlist.component';
import { RerpaymenttransactionlistComponent } from './views/rentedequipmentview/rerpaymenttransaction/rerpaymenttransactionlist/rerpaymenttransactionlist.component';
import { RentedvehiclelistComponent } from './views/rentedvehicleview/rentedvehicle/rentedvehiclelist/rentedvehiclelist.component';
import { RvepaymenttransctionlistComponent } from './views/rentedvehicleview/rvepaymenttransction/rvepaymenttransctionlist/rvepaymenttransctionlist.component';
import { RvexpenseslistComponent } from './views/rentedvehicleview/rvexpenses/rvexpenseslist/rvexpenseslist.component';
import { RvincomelistComponent } from './views/rentedvehicleview/rvincome/rvincomelist/rvincomelist.component';
import { RvipaymenttransctionlistComponent } from './views/rentedvehicleview/rvipaymenttransction/rvipaymenttransctionlist/rvipaymenttransctionlist.component';
import { RvrentlistComponent } from './views/rentedvehicleview/rvrent/rvrentlist/rvrentlist.component';
import { RvrpaymenttransctionlistComponent } from './views/rentedvehicleview/rvrpaymenttransction/rvrpaymenttransctionlist/rvrpaymenttransctionlist.component';
import { SitelistComponent } from './views/siteview/sitelist/sitelist.component';
import { UserlistComponent } from './views/userview/userlist/userlist.component';
import { VendorlistComponent } from './views/vendorview/vendorlist/vendorlist.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'client', component: ClientlistComponent },
      {
        path: 'extend-give-contract',
        component: ExtendgivecontractlistComponent,
      },
      {
        path: 'extend-take-contract',
        component: ExtendtakecontractlistComponent,
      },
      {
        path: 'gcp-payment-transaction',
        component: GcppaymenttransactionlistComponent,
      },
      { path: 'give-contract', component: GivecontractlistComponent },
      {
        path: 'take-contract',
        component: TakecontractlistComponent,
      },
      {
        path: 'tcp-payment-transaction',
        component: TcppaymenttransactionlistComponent,
      },
      { path: 'employee', component: EmployeelistComponent },
      { path: 'employee-payment', component: EmployeepaymentlistComponent },
      { path: 'labour', component: LabourlistComponent },
      { path: 'labour-payment', component: LabourpaymentlistComponent },
      { path: 'labour-site', component: LaboursitelistComponent },
      { path: 'material', component: MateriallistComponent },
      { path: 'material-bought', component: MaterialboughtlistComponent },
      { path: 'material-sold', component: MaterialsoldlistComponent },
      { path: 'material-stock', component: MaterialstocklistComponent },
      { path: 'material-used', component: MaterialusedlistComponent },
      {
        path: 'mb-payment-transaction',
        component: MbpaymenttransacionlistComponent,
      },
      {
        path: 'ms-payment-transaction',
        component: MspaymenttransactionlistComponent,
      },
      { path: 'pe-bought', component: PeboughtlistComponent },
      { path: 'peb-payment-transaction', component: PebpaymenttransctionlistComponent },
      { path: 'pee-payment-transaction', component: PeepaymenttransctionlistComponent },
      { path: 'pe-expenses', component: PeexpenseslistComponent },
      { path: 'pe-income', component: PeincomelistComponent },
      {
        path: 'pei-payment-transaction',
        component: PeipaymenttransactionlistComponent,
      },
      {
        path: 'personal-equipment',
        component: PersonalequipmentlistComponent,
      },
      { path: 'personal-vehicle', component: PersonalvehiclelistComponent },
      { path: 'pv-bought', component: PvboughtlistComponent },
      {
        path: 'pvb-payment-transaction',
        component: PvbpaymenttransactionlistComponent,
      },
      {
        path: 'pve-payment-transaction',
        component: PvepaymenttransactionlistComponent,
      },
      { path: 'pv-expenses', component: PvepenseslistComponent },
      { path: 'pv-income', component: PvincomelistComponent },
      { path: 'pvi-payment-transaction', component: PvipaymenttransctionlistComponent },
      {
        path: 'ree-payment-transaction',
        component: ReepaymenttransactionlistComponent,
      },
      { path: 're-expenses', component: ReexpenseslistComponent },
      { path: 're-income', component: ReincomelistComponent },
      {
        path: 'rei-payment-transaction',
        component: ReipaymenttransctionlistComponent,
      },
      { path: 're-rent', component: RerentlistComponent },
      {
        path: 'rer-payment-transaction',
        component: RerpaymenttransactionlistComponent,
      },
      {
        path: 'rented-equipment',
        component: RentedequipmentlistComponent,
      },
      { path: 'rented-vehicle', component: RentedvehiclelistComponent },
      {
        path: 'rve-payment-transaction',
        component: RvepaymenttransctionlistComponent,
      },
      { path: 'rv-expenses', component: RvexpenseslistComponent },
      { path: 'rv-income', component: RvincomelistComponent },
      {
        path: 'rvi-payment-transaction',
        component: RvipaymenttransctionlistComponent,
      },
      { path: 'rv-rent', component: RvrentlistComponent },
      {
        path: 'rvr-payment-transaction',
        component: RvrpaymenttransctionlistComponent,
      },
      { path: 'site', component: SitelistComponent },
      { path: 'user', component: UserlistComponent },
      { path: 'vendor', component: VendorlistComponent },
    ],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
