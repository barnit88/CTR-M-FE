import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PEBPaymentTransaction } from './entity/models/PersonalEquipment/pebpayment-transaction';
import { PEEPaymentTransaction } from './entity/models/PersonalEquipment/peepayment-transaction';
import { PEIPaymentTransaction } from './entity/models/PersonalEquipment/peipayment-transaction';
import { PVBPaymentTransaction } from './entity/models/PersonalVehicle/pvbpayment-transaction';
import { PVEPaymentTransaction } from './entity/models/PersonalVehicle/pvepayment-transaction';
import { PVExpenses } from './entity/models/PersonalVehicle/pvexpenses';
import { PVIPaymentTransaction } from './entity/models/PersonalVehicle/pvipayment-transaction';
import { REIPaymentTransaction } from './entity/models/RentedEquipment/reipayment-transaction';
import { RVRent } from './entity/models/RentedVehicle/rvrent';
import { AdminComponent } from './views/admin/admin.component';
import { ClientcreateComponent } from './views/clientview/clientcreate/clientcreate.component';
import { ExtendgivecontractcreateComponent } from './views/contractview/extendgivecontract/extendgivecontractcreate/extendgivecontractcreate.component';
import { ExtendtakecontractcreateComponent } from './views/contractview/extendtakecontract/extendtakecontractcreate/extendtakecontractcreate.component';
import { GcppaymenttransactioncreateComponent } from './views/contractview/gcppaymenttransaction/gcppaymenttransactioncreate/gcppaymenttransactioncreate.component';
import { GivecontractcreateComponent } from './views/contractview/givecontract/givecontractcreate/givecontractcreate.component';
import { TakecontractcreateComponent } from './views/contractview/takecontract/takecontractcreate/takecontractcreate.component';
import { TcppaymenttransactioncreateComponent } from './views/contractview/tcppaymenttransaction/tcppaymenttransactioncreate/tcppaymenttransactioncreate.component';
import { EmployeecreateComponent } from './views/employeeview/employee/employeecreate/employeecreate.component';
import { EmployeepaymentcreateComponent } from './views/employeeview/employeepayment/employeepaymentcreate/employeepaymentcreate.component';
import { LabourcreateComponent } from './views/labourview/labour/labourcreate/labourcreate.component';
import { LabourpaymentcreateComponent } from './views/labourview/labourpayment/labourpaymentcreate/labourpaymentcreate.component';
import { LaboursitecreateComponent } from './views/labourview/laboursite/laboursitecreate/laboursitecreate.component';
import { MaterialcreateComponent } from './views/materialview/material/materialcreate/materialcreate.component';
import { MaterialboughtcreateComponent } from './views/materialview/materialbought/materialboughtcreate/materialboughtcreate.component';
import { MaterialsoldcreateComponent } from './views/materialview/materialsold/materialsoldcreate/materialsoldcreate.component';
import { MaterialstockcreateComponent } from './views/materialview/materialstock/materialstockcreate/materialstockcreate.component';
import { MaterialusedcreateComponent } from './views/materialview/materialused/materialusedcreate/materialusedcreate.component';
import { MbpaymenttransacioncreateComponent } from './views/materialview/mbpaymenttransaction/mbpaymenttransacioncreate/mbpaymenttransacioncreate.component';
import { MspaymenttransactioncreateComponent } from './views/materialview/mspaymenttransaction/mspaymenttransactioncreate/mspaymenttransactioncreate.component';
import { PeboughtcreateComponent } from './views/personalequipmentview/pebought/peboughtcreate/peboughtcreate.component';
import { PeexpensescreateComponent } from './views/personalequipmentview/peexpenses/peexpensescreate/peexpensescreate.component';
import { PeincomecreateComponent } from './views/personalequipmentview/peincome/peincomecreate/peincomecreate.component';
import { PeipaymenttransactioncreateComponent } from './views/personalequipmentview/peipaymenttransaction/peipaymenttransactioncreate/peipaymenttransactioncreate.component';
import { PersonalequipmentcreateComponent } from './views/personalequipmentview/personalequipment/personalequipmentcreate/personalequipmentcreate.component';
import { PersonalvehiclecreateComponent } from './views/personalvehicleview/personalvehicle/personalvehiclecreate/personalvehiclecreate.component';
import { PvboughtcreateComponent } from './views/personalvehicleview/pvbought/pvboughtcreate/pvboughtcreate.component';
import { PvbpaymenttransactioncreateComponent } from './views/personalvehicleview/pvbpaymenttransaction/pvbpaymenttransactioncreate/pvbpaymenttransactioncreate.component';
import { PvepaymenttransactioncreateComponent } from './views/personalvehicleview/pvepaymenttransaction/pvepaymenttransactioncreate/pvepaymenttransactioncreate.component';
import { PvepensescreateComponent } from './views/personalvehicleview/pvepenses/pvepensescreate/pvepensescreate.component';
import { PvincomecreateComponent } from './views/personalvehicleview/pvincome/pvincomecreate/pvincomecreate.component';
import { ReepaymenttransactioncreateComponent } from './views/rentedequipmentview/reepaymenttransaction/reepaymenttransactioncreate/reepaymenttransactioncreate.component';
import { ReexpensescreateComponent } from './views/rentedequipmentview/reexpenses/reexpensescreate/reexpensescreate.component';
import { ReincomecreateComponent } from './views/rentedequipmentview/reincome/reincomecreate/reincomecreate.component';
import { ReipaymenttransctioncreateComponent } from './views/rentedequipmentview/reipaymenttransction/reipaymenttransctioncreate/reipaymenttransctioncreate.component';
import { RerentcreateComponent } from './views/rentedequipmentview/rerent/rerentcreate/rerentcreate.component';
import { RerpaymenttransactioncreateComponent } from './views/rentedequipmentview/rerpaymenttransaction/rerpaymenttransactioncreate/rerpaymenttransactioncreate.component';
import { RentedvehiclecreateComponent } from './views/rentedvehicleview/rentedvehicle/rentedvehiclecreate/rentedvehiclecreate.component';
import { RvepaymenttransctioncreateComponent } from './views/rentedvehicleview/rvepaymenttransction/rvepaymenttransctioncreate/rvepaymenttransctioncreate.component';
import { RvexpensescreateComponent } from './views/rentedvehicleview/rvexpenses/rvexpensescreate/rvexpensescreate.component';
import { RvincomecreateComponent } from './views/rentedvehicleview/rvincome/rvincomecreate/rvincomecreate.component';
import { RvipaymenttransctioncreateComponent } from './views/rentedvehicleview/rvipaymenttransction/rvipaymenttransctioncreate/rvipaymenttransctioncreate.component';
import { RvrpaymenttransctioncreateComponent } from './views/rentedvehicleview/rvrpaymenttransction/rvrpaymenttransctioncreate/rvrpaymenttransctioncreate.component';
import { SitecreateComponent } from './views/siteview/sitecreate/sitecreate.component';
import { UsercreateComponent } from './views/userview/usercreate/usercreate.component';
import { VendorcreateComponent } from './views/vendorview/vendorcreate/vendorcreate.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'client', component: ClientcreateComponent },
      {
        path: 'extend-give-contract',
        component: ExtendgivecontractcreateComponent,
      },
      {
        path: 'extend-take-contract',
        component: ExtendtakecontractcreateComponent,
      },
      {
        path: 'gcp-payment-transaction',
        component: GcppaymenttransactioncreateComponent,
      },
      { path: 'give-contract', component: GivecontractcreateComponent },
      {
        path: 'take-contract',
        component: TakecontractcreateComponent,
      },
      {
        path: 'tcp-payment-transaction',
        component: TcppaymenttransactioncreateComponent,
      },
      { path: 'employee-payment', component: EmployeepaymentcreateComponent },
      { path: 'labour', component: LabourcreateComponent },
      { path: 'labour-payment', component: LabourpaymentcreateComponent },
      { path: 'labour-site', component: LaboursitecreateComponent },
      { path: 'material', component: MaterialcreateComponent },
      { path: 'material-bought', component: MaterialboughtcreateComponent },
      { path: 'material-sold', component: MaterialsoldcreateComponent },
      { path: 'material-stock', component: MaterialstockcreateComponent },
      { path: 'material-used', component: MaterialusedcreateComponent },
      {
        path: 'mb-payment-transaction',
        component: MbpaymenttransacioncreateComponent,
      },
      {
        path: 'ms-payment-transaction',
        component: MspaymenttransactioncreateComponent,
      },
      { path: 'pe-bought', component: PeboughtcreateComponent },
      { path: 'peb-payment-transaction', component: PEBPaymentTransaction },
      { path: 'pee-payment-transaction', component: PEEPaymentTransaction },
      { path: 'pee-expenses', component: PeexpensescreateComponent },
      { path: 'pe-income', component: PeincomecreateComponent },
      {
        path: 'pei-payment-transaction',
        component: PeipaymenttransactioncreateComponent,
      },
      {
        path: 'personal-equipment',
        component: PersonalequipmentcreateComponent,
      },
      { path: 'personal-vehicle', component: PersonalvehiclecreateComponent },
      { path: 'pv-bought', component: PvboughtcreateComponent },
      {
        path: 'pvb-payment-transaction',
        component: PvbpaymenttransactioncreateComponent,
      },
      {
        path: 'pve-payment-transaction',
        component: PvepaymenttransactioncreateComponent,
      },
      { path: 'pv-expenses', component: PvepensescreateComponent },
      { path: 'pv-income', component: PvincomecreateComponent },
      { path: 'pvi-payment-transaction', component: PVIPaymentTransaction },
      {
        path: 'ree-payment-transaction',
        component: ReepaymenttransactioncreateComponent,
      },
      { path: 'ree-expenses', component: ReexpensescreateComponent },
      { path: 're-income', component: ReincomecreateComponent },
      {
        path: 'rei-payment-transaction',
        component: ReipaymenttransctioncreateComponent,
      },
      { path: 're-rent', component: RerentcreateComponent },
      {
        path: 'rer-payment-transaction',
        component: RerpaymenttransactioncreateComponent,
      },
      { path: 'rented-vehicle', component: RentedvehiclecreateComponent },
      {
        path: 'rve-payment-transaction',
        component: RvepaymenttransctioncreateComponent,
      },
      { path: 'rv-expenses', component: RvexpensescreateComponent },
      { path: 'rv-income', component: RvincomecreateComponent },
      {
        path: 'rvi-payment-transaction',
        component: RvipaymenttransctioncreateComponent,
      },
      { path: 'rv-rent', component: RVRent },
      {
        path: 'rvr-payment-transaction',
        component: RvrpaymenttransctioncreateComponent,
      },
      { path: 'site', component: SitecreateComponent },
      { path: 'user', component: UsercreateComponent },
      { path: 'vendor', component: VendorcreateComponent },
    ],
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
