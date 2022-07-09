import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientcreateComponent } from './views/clientview/clientcreate/clientcreate.component';
import { ClienteditComponent } from './views/clientview/clientedit/clientedit.component';
import { ClientdetailComponent } from './views/clientview/clientdetail/clientdetail.component';
import { ClientlistComponent } from './views/clientview/clientlist/clientlist.component';
import { ExtendgivecontractcreateComponent } from './views/contractview/extendgivecontract/extendgivecontractcreate/extendgivecontractcreate.component';
import { ExtendgivecontracteditComponent } from './views/contractview/extendgivecontract/extendgivecontractedit/extendgivecontractedit.component';
import { ExtendgivecontractdetailComponent } from './views/contractview/extendgivecontract/extendgivecontractdetail/extendgivecontractdetail.component';
import { ExtendgivecontractlistComponent } from './views/contractview/extendgivecontract/extendgivecontractlist/extendgivecontractlist.component';
import { ExtendtakecontractcreateComponent } from './views/contractview/extendtakecontract/extendtakecontractcreate/extendtakecontractcreate.component';
import { ExtendtakecontracteditComponent } from './views/contractview/extendtakecontract/extendtakecontractedit/extendtakecontractedit.component';
import { ExtendtakecontractdetailComponent } from './views/contractview/extendtakecontract/extendtakecontractdetail/extendtakecontractdetail.component';
import { ExtendtakecontractlistComponent } from './views/contractview/extendtakecontract/extendtakecontractlist/extendtakecontractlist.component';
import { GcppaymenttransactioncreateComponent } from './views/contractview/gcppaymenttransaction/gcppaymenttransactioncreate/gcppaymenttransactioncreate.component';
import { GcppaymenttransactioneditComponent } from './views/contractview/gcppaymenttransaction/gcppaymenttransactionedit/gcppaymenttransactionedit.component';
import { GcppaymenttransactiondetailComponent } from './views/contractview/gcppaymenttransaction/gcppaymenttransactiondetail/gcppaymenttransactiondetail.component';
import { GcppaymenttransactionlistComponent } from './views/contractview/gcppaymenttransaction/gcppaymenttransactionlist/gcppaymenttransactionlist.component';
import { GivecontractcreateComponent } from './views/contractview/givecontract/givecontractcreate/givecontractcreate.component';
import { GivecontracteditComponent } from './views/contractview/givecontract/givecontractedit/givecontractedit.component';
import { GivecontractdetailComponent } from './views/contractview/givecontract/givecontractdetail/givecontractdetail.component';
import { GivecontractlistComponent } from './views/contractview/givecontract/givecontractlist/givecontractlist.component';
import { TakecontractcreateComponent } from './views/contractview/takecontract/takecontractcreate/takecontractcreate.component';
import { TakecontracteditComponent } from './views/contractview/takecontract/takecontractedit/takecontractedit.component';
import { TakecontractlistComponent } from './views/contractview/takecontract/takecontractlist/takecontractlist.component';
import { TakecontractdetailComponent } from './views/contractview/takecontract/takecontractdetail/takecontractdetail.component';
import { TcppaymenttransactioncreateComponent } from './views/contractview/tcppaymenttransaction/tcppaymenttransactioncreate/tcppaymenttransactioncreate.component';
import { TcppaymenttransactioneditComponent } from './views/contractview/tcppaymenttransaction/tcppaymenttransactionedit/tcppaymenttransactionedit.component';
import { TcppaymenttransactiondetailComponent } from './views/contractview/tcppaymenttransaction/tcppaymenttransactiondetail/tcppaymenttransactiondetail.component';
import { TcppaymenttransactionlistComponent } from './views/contractview/tcppaymenttransaction/tcppaymenttransactionlist/tcppaymenttransactionlist.component';
import { EmployeecreateComponent } from './views/employeeview/employee/employeecreate/employeecreate.component';
import { EmployeeeditComponent } from './views/employeeview/employee/employeeedit/employeeedit.component';
import { EmployeedetailComponent } from './views/employeeview/employee/employeedetail/employeedetail.component';
import { EmployeelistComponent } from './views/employeeview/employee/employeelist/employeelist.component';
import { EmployeepaymenteditComponent } from './views/employeeview/employeepayment/employeepaymentedit/employeepaymentedit.component';
import { EmployeepaymentdetailComponent } from './views/employeeview/employeepayment/employeepaymentdetail/employeepaymentdetail.component';
import { EmployeepaymentcreateComponent } from './views/employeeview/employeepayment/employeepaymentcreate/employeepaymentcreate.component';
import { EmployeepaymentlistComponent } from './views/employeeview/employeepayment/employeepaymentlist/employeepaymentlist.component';
import { LaboureditComponent } from './views/labourview/labour/labouredit/labouredit.component';
import { LabourcreateComponent } from './views/labourview/labour/labourcreate/labourcreate.component';
import { LabourdetailComponent } from './views/labourview/labour/labourdetail/labourdetail.component';
import { LabourlistComponent } from './views/labourview/labour/labourlist/labourlist.component';
import { LabourpaymenteditComponent } from './views/labourview/labourpayment/labourpaymentedit/labourpaymentedit.component';
import { LabourpaymentcreateComponent } from './views/labourview/labourpayment/labourpaymentcreate/labourpaymentcreate.component';
import { LabourpaymentdetailComponent } from './views/labourview/labourpayment/labourpaymentdetail/labourpaymentdetail.component';
import { LabourpaymentlistComponent } from './views/labourview/labourpayment/labourpaymentlist/labourpaymentlist.component';
import { LaboursitecreateComponent } from './views/labourview/laboursite/laboursitecreate/laboursitecreate.component';
import { LaboursiteeditComponent } from './views/labourview/laboursite/laboursiteedit/laboursiteedit.component';
import { LaboursitedetailComponent } from './views/labourview/laboursite/laboursitedetail/laboursitedetail.component';
import { LaboursitelistComponent } from './views/labourview/laboursite/laboursitelist/laboursitelist.component';
import { MaterialcreateComponent } from './views/materialview/material/materialcreate/materialcreate.component';
import { MaterialeditComponent } from './views/materialview/material/materialedit/materialedit.component';
import { MaterialdetailComponent } from './views/materialview/material/materialdetail/materialdetail.component';
import { MateriallistComponent } from './views/materialview/material/materiallist/materiallist.component';
import { MaterialboughtcreateComponent } from './views/materialview/materialbought/materialboughtcreate/materialboughtcreate.component';
import { MaterialboughteditComponent } from './views/materialview/materialbought/materialboughtedit/materialboughtedit.component';
import { MaterialboughtdetailComponent } from './views/materialview/materialbought/materialboughtdetail/materialboughtdetail.component';
import { MaterialboughtlistComponent } from './views/materialview/materialbought/materialboughtlist/materialboughtlist.component';
import { MaterialsoldcreateComponent } from './views/materialview/materialsold/materialsoldcreate/materialsoldcreate.component';
import { MaterialsoldeditComponent } from './views/materialview/materialsold/materialsoldedit/materialsoldedit.component';
import { MaterialsolddetailComponent } from './views/materialview/materialsold/materialsolddetail/materialsolddetail.component';
import { MaterialsoldlistComponent } from './views/materialview/materialsold/materialsoldlist/materialsoldlist.component';
import { MaterialstockcreateComponent } from './views/materialview/materialstock/materialstockcreate/materialstockcreate.component';
import { MaterialstockeditComponent } from './views/materialview/materialstock/materialstockedit/materialstockedit.component';
import { MaterialstockdetailComponent } from './views/materialview/materialstock/materialstockdetail/materialstockdetail.component';
import { MaterialstocklistComponent } from './views/materialview/materialstock/materialstocklist/materialstocklist.component';
import { MaterialusedcreateComponent } from './views/materialview/materialused/materialusedcreate/materialusedcreate.component';
import { MaterialusededitComponent } from './views/materialview/materialused/materialusededit/materialusededit.component';
import { MaterialuseddetailComponent } from './views/materialview/materialused/materialuseddetail/materialuseddetail.component';
import { MaterialusedlistComponent } from './views/materialview/materialused/materialusedlist/materialusedlist.component';
import { MbpaymenttransacioncreateComponent } from './views/materialview/materialused/mbpaymenttransacioncreate/mbpaymenttransacioncreate.component';
import { MbpaymenttransacioneditComponent } from './views/materialview/materialused/mbpaymenttransacionedit/mbpaymenttransacionedit.component';
import { MbpaymenttransaciondetailComponent } from './views/materialview/materialused/mbpaymenttransaciondetail/mbpaymenttransaciondetail.component';
import { MbpaymenttransacionlistComponent } from './views/materialview/materialused/mbpaymenttransacionlist/mbpaymenttransacionlist.component';
import { MspaymenttransactioncreateComponent } from './views/materialview/mspaymenttransaction/mspaymenttransactioncreate/mspaymenttransactioncreate.component';
import { MspaymenttransactioneditComponent } from './views/materialview/mspaymenttransaction/mspaymenttransactionedit/mspaymenttransactionedit.component';
import { MspaymenttransactiondetailComponent } from './views/materialview/mspaymenttransaction/mspaymenttransactiondetail/mspaymenttransactiondetail.component';
import { MspaymenttransactionlistComponent } from './views/materialview/mspaymenttransaction/mspaymenttransactionlist/mspaymenttransactionlist.component';
import { PeboughtcreateComponent } from './views/personalequipmentview/pebought/peboughtcreate/peboughtcreate.component';
import { PeboughteditComponent } from './views/personalequipmentview/pebought/peboughtedit/peboughtedit.component';
import { PeboughtdetailComponent } from './views/personalequipmentview/pebought/peboughtdetail/peboughtdetail.component';
import { PeboughtlistComponent } from './views/personalequipmentview/pebought/peboughtlist/peboughtlist.component';
import { PebpaymenttransctioncreateComponent } from './views/personalequipmentview/pebpaymenttransctioncreate/pebpaymenttransctioncreate.component';
import { PebpaymenttransctioneditComponent } from './views/personalequipmentview/pebpaymenttransction/pebpaymenttransctionedit/pebpaymenttransctionedit.component';
import { PebpaymenttransctiondetailComponent } from './views/personalequipmentview/pebpaymenttransction/pebpaymenttransctiondetail/pebpaymenttransctiondetail.component';
import { PebpaymenttransctionlistComponent } from './views/personalequipmentview/pebpaymenttransction/pebpaymenttransctionlist/pebpaymenttransctionlist.component';
import { PeepaymenttransctioncreateComponent } from './views/personalequipmentview/peepaymenttransction/peepaymenttransctioncreate/peepaymenttransctioncreate.component';
import { PeepaymenttransctioneditComponent } from './views/personalequipmentview/peepaymenttransction/peepaymenttransctionedit/peepaymenttransctionedit.component';
import { PeepaymenttransctiondetailComponent } from './views/personalequipmentview/peepaymenttransction/peepaymenttransctiondetail/peepaymenttransctiondetail.component';
import { PeepaymenttransctionlistComponent } from './views/personalequipmentview/peepaymenttransction/peepaymenttransctionlist/peepaymenttransctionlist.component';
import { PeexpensescreateComponent } from './views/personalequipmentview/peexpenses/peexpensescreate/peexpensescreate.component';
import { PeexpenseseditComponent } from './views/personalequipmentview/peexpenses/peexpensesedit/peexpensesedit.component';
import { PeexpensesdetailComponent } from './views/personalequipmentview/peexpenses/peexpensesdetail/peexpensesdetail.component';
import { PeexpenseslistComponent } from './views/personalequipmentview/peexpenses/peexpenseslist/peexpenseslist.component';
import { PeincomecreateComponent } from './views/personalequipmentview/peincome/peincomecreate/peincomecreate.component';
import { PeincomeeditComponent } from './views/personalequipmentview/peincome/peincomeedit/peincomeedit.component';
import { PeincomedetailComponent } from './views/personalequipmentview/peincome/peincomedetail/peincomedetail.component';
import { PeincomelistComponent } from './views/personalequipmentview/peincome/peincomelist/peincomelist.component';
import { PeipaymenttransactioncreateComponent } from './views/personalequipmentview/peipaymenttransaction/peipaymenttransactioncreate/peipaymenttransactioncreate.component';
import { PeipaymenttransactioneditComponent } from './views/personalequipmentview/peipaymenttransaction/peipaymenttransactionedit/peipaymenttransactionedit.component';
import { PeipaymenttransactiondetailComponent } from './views/personalequipmentview/peipaymenttransaction/peipaymenttransactiondetail/peipaymenttransactiondetail.component';
import { PeipaymenttransactionlistComponent } from './views/personalequipmentview/peipaymenttransaction/peipaymenttransactionlist/peipaymenttransactionlist.component';
import { PersonalequipmentcreateComponent } from './views/personalequipmentview/personalequipment/personalequipmentcreate/personalequipmentcreate.component';
import { PersonalequipmenteditComponent } from './views/personalequipmentview/personalequipment/personalequipmentedit/personalequipmentedit.component';
import { PersonalequipmentdetailComponent } from './views/personalequipmentview/personalequipment/personalequipmentdetail/personalequipmentdetail.component';
import { PersonalequipmentlistComponent } from './views/personalequipmentview/personalequipment/personalequipmentlist/personalequipmentlist.component';
import { SitecreateComponent } from './views/siteview/sitecreate/sitecreate.component';
import { SiteeditComponent } from './views/siteview/siteedit/siteedit.component';
import { SitedetailComponent } from './views/siteview/sitedetail/sitedetail.component';
import { SitelistComponent } from './views/siteview/sitelist/sitelist.component';
import { UsercreateComponent } from './views/userview/usercreate/usercreate.component';
import { UsereditComponent } from './views/userview/useredit/useredit.component';
import { UserdetailComponent } from './views/userview/userdetail/userdetail.component';
import { UserlistComponent } from './views/userview/userlist/userlist.component';
import { VendorcreateComponent } from './views/vendorview/vendorcreate/vendorcreate.component';
import { VendoreditComponent } from './views/vendorview/vendoredit/vendoredit.component';
import { VendordetailComponent } from './views/vendorview/vendordetail/vendordetail.component';
import { VendorlistComponent } from './views/vendorview/vendorlist/vendorlist.component';
import { PersonalvehiclecreateComponent } from './views/personalvehicleview/personalvehicle/personalvehiclecreate/personalvehiclecreate.component';
import { PersonalvehicleeditComponent } from './views/personalvehicleview/personalvehicle/personalvehicleedit/personalvehicleedit.component';
import { PersonalvehicledetailComponent } from './views/personalvehicleview/personalvehicle/personalvehicledetail/personalvehicledetail.component';
import { PersonalvehiclelistComponent } from './views/personalvehicleview/personalvehicle/personalvehiclelist/personalvehiclelist.component';
import { PvboughtComponent } from './views/personalvehicleview/pvbought/pvbought/pvbought.component';
import { PvboughtcreateComponent } from './views/personalvehicleview/pvbought/pvboughtcreate/pvboughtcreate.component';
import { PvboughteditComponent } from './views/personalvehicleview/pvbought/pvboughtedit/pvboughtedit.component';
import { PvboughtdetailComponent } from './views/personalvehicleview/pvbought/pvboughtdetail/pvboughtdetail.component';
import { PvboughtlistComponent } from './views/personalvehicleview/pvbought/pvboughtlist/pvboughtlist.component';
import { PvbpaymenttransactioncreateComponent } from './views/personalvehicleview/pvbpaymenttransaction/pvbpaymenttransactioncreate/pvbpaymenttransactioncreate.component';
import { PvbpaymenttransactioneditComponent } from './views/personalvehicleview/pvbpaymenttransaction/pvbpaymenttransactionedit/pvbpaymenttransactionedit.component';
import { PvbpaymenttransactiondetailComponent } from './views/personalvehicleview/pvbpaymenttransaction/pvbpaymenttransactiondetail/pvbpaymenttransactiondetail.component';
import { PvbpaymenttransactionlistComponent } from './views/personalvehicleview/pvbpaymenttransaction/pvbpaymenttransactionlist/pvbpaymenttransactionlist.component';
import { PvepaymenttransactioncreateComponent } from './views/personalvehicleview/pvepaymenttransaction/pvepaymenttransactioncreate/pvepaymenttransactioncreate.component';
import { PvepaymenttransactioneditComponent } from './views/personalvehicleview/pvepaymenttransaction/pvepaymenttransactionedit/pvepaymenttransactionedit.component';
import { PvepaymenttransactiondetailComponent } from './views/personalvehicleview/pvepaymenttransaction/pvepaymenttransactiondetail/pvepaymenttransactiondetail.component';
import { PvepaymenttransactionlistComponent } from './views/personalvehicleview/pvepaymenttransaction/pvepaymenttransactionlist/pvepaymenttransactionlist.component';
import { PvepensescreateComponent } from './views/personalvehicleview/pvepenses/pvepensescreate/pvepensescreate.component';
import { PvepenseseditComponent } from './views/personalvehicleview/pvepenses/pvepensesedit/pvepensesedit.component';
import { PvepensesdetailComponent } from './views/personalvehicleview/pvepenses/pvepensesdetail/pvepensesdetail.component';
import { PvepenseslistComponent } from './views/personalvehicleview/pvepenses/pvepenseslist/pvepenseslist.component';
import { PvincomecreateComponent } from './views/personalvehicleview/pvincome/pvincomecreate/pvincomecreate.component';
import { PvincomeeditComponent } from './views/personalvehicleview/pvincome/pvincomeedit/pvincomeedit.component';
import { PvincomedetailComponent } from './views/personalvehicleview/pvincome/pvincomedetail/pvincomedetail.component';
import { PvincomelistComponent } from './views/personalvehicleview/pvincome/pvincomelist/pvincomelist.component';
import { PvipaymenttransctioncreateComponent } from './views/personalvehicleview/pvipaymenttransction/pvipaymenttransctioncreate/pvipaymenttransctioncreate.component';
import { PvipaymenttransctiondetailComponent } from './views/personalvehicleview/pvipaymenttransction/pvipaymenttransctiondetail/pvipaymenttransctiondetail.component';
import { PvipaymenttransctioneditComponent } from './views/personalvehicleview/pvipaymenttransction/pvipaymenttransctionedit/pvipaymenttransctionedit.component';
import { PvipaymenttransctionlistComponent } from './views/personalvehicleview/pvipaymenttransction/pvipaymenttransctionlist/pvipaymenttransctionlist.component';
import { ReepaymenttransactioncreateComponent } from './views/rentedequipmentview/reepaymenttransaction/reepaymenttransactioncreate/reepaymenttransactioncreate.component';
import { ReepaymenttransactioneditComponent } from './views/rentedequipmentview/reepaymenttransaction/reepaymenttransactionedit/reepaymenttransactionedit.component';
import { ReepaymenttransactiondetailComponent } from './views/rentedequipmentview/reepaymenttransaction/reepaymenttransactiondetail/reepaymenttransactiondetail.component';
import { ReepaymenttransactionlistComponent } from './views/rentedequipmentview/reepaymenttransaction/reepaymenttransactionlist/reepaymenttransactionlist.component';
import { ReexpensescreateComponent } from './views/rentedequipmentview/reexpenses/reexpensescreate/reexpensescreate.component';
import { ReexpenseseditComponent } from './views/rentedequipmentview/reexpenses/reexpensesedit/reexpensesedit.component';
import { ReexpensesdetailComponent } from './views/rentedequipmentview/reexpenses/reexpensesdetail/reexpensesdetail.component';
import { ReexpenseslistComponent } from './views/rentedequipmentview/reexpenses/reexpenseslist/reexpenseslist.component';
import { ReincomecreateComponent } from './views/rentedequipmentview/reincome/reincomecreate/reincomecreate.component';
import { ReincomeeditComponent } from './views/rentedequipmentview/reincome/reincomeedit/reincomeedit.component';
import { ReincomedetailComponent } from './views/rentedequipmentview/reincome/reincomedetail/reincomedetail.component';
import { ReincomelistComponent } from './views/rentedequipmentview/reincome/reincomelist/reincomelist.component';
import { ReipaymenttransctioncreateComponent } from './views/rentedequipmentview/reipaymenttransction/reipaymenttransctioncreate/reipaymenttransctioncreate.component';
import { ReipaymenttransctioneditComponent } from './views/rentedequipmentview/reipaymenttransction/reipaymenttransctionedit/reipaymenttransctionedit.component';
import { ReipaymenttransctiondetailComponent } from './views/rentedequipmentview/reipaymenttransction/reipaymenttransctiondetail/reipaymenttransctiondetail.component';
import { ReipaymenttransctionlistComponent } from './views/rentedequipmentview/reipaymenttransction/reipaymenttransctionlist/reipaymenttransctionlist.component';
import { RentedequipmentcreateComponent } from './views/rentedequipmentview/rentedequipment/rentedequipmentcreate/rentedequipmentcreate.component';
import { RentedequipmentdetailComponent } from './views/rentedequipmentview/rentedequipment/rentedequipmentdetail/rentedequipmentdetail.component';
import { RentedequipmentdeleteComponent } from './views/rentedequipmentview/rentedequipment/rentedequipmentdelete/rentedequipmentdelete.component';
import { RentedequipmenteditComponent } from './views/rentedequipmentview/rentedequipment/rentedequipmentedit/rentedequipmentedit.component';
import { RentedequipmentlistComponent } from './views/rentedequipmentview/rentedequipment/rentedequipmentlist/rentedequipmentlist.component';
import { RerentcreateComponent } from './views/rentedequipmentview/rerent/rerentcreate/rerentcreate.component';
import { RerenteditComponent } from './views/rentedequipmentview/rerent/rerentedit/rerentedit.component';
import { RerentdetailComponent } from './views/rentedequipmentview/rerent/rerentdetail/rerentdetail.component';
import { RerentlistComponent } from './views/rentedequipmentview/rerent/rerentlist/rerentlist.component';
import { RerpaymenttransactioncreateComponent } from './views/rentedequipmentview/rerpaymenttransaction/rerpaymenttransactioncreate/rerpaymenttransactioncreate.component';
import { RerpaymenttransactioneditComponent } from './views/rentedequipmentview/rerpaymenttransaction/rerpaymenttransactionedit/rerpaymenttransactionedit.component';
import { RerpaymenttransactiondetailComponent } from './views/rentedequipmentview/rerpaymenttransaction/rerpaymenttransactiondetail/rerpaymenttransactiondetail.component';
import { RerpaymenttransactionlistComponent } from './views/rentedequipmentview/rerpaymenttransaction/rerpaymenttransactionlist/rerpaymenttransactionlist.component';
import { RentedvehiclecreateComponent } from './views/rentedvehicleview/rentedvehicle/rentedvehiclecreate/rentedvehiclecreate.component';
import { RentedvehicleeditComponent } from './views/rentedvehicleview/rentedvehicle/rentedvehicleedit/rentedvehicleedit.component';
import { RentedvehicledetailComponent } from './views/rentedvehicleview/rentedvehicle/rentedvehicledetail/rentedvehicledetail.component';
import { RentedvehiclelistComponent } from './views/rentedvehicleview/rentedvehicle/rentedvehiclelist/rentedvehiclelist.component';
import { RvepaymenttransctioncreateComponent } from './views/rentedvehicleview/rvepaymenttransction/rvepaymenttransctioncreate/rvepaymenttransctioncreate.component';
import { RvepaymenttransctioneditComponent } from './views/rentedvehicleview/rvepaymenttransction/rvepaymenttransctionedit/rvepaymenttransctionedit.component';
import { RvepaymenttransctiondetailComponent } from './views/rentedvehicleview/rvepaymenttransction/rvepaymenttransctiondetail/rvepaymenttransctiondetail.component';
import { RvepaymenttransctionlistComponent } from './views/rentedvehicleview/rvepaymenttransction/rvepaymenttransctionlist/rvepaymenttransctionlist.component';
import { RvexpensescreateComponent } from './views/rentedvehicleview/rvexpenses/rvexpensescreate/rvexpensescreate.component';
import { RvexpenseseditComponent } from './views/rentedvehicleview/rvexpenses/rvexpensesedit/rvexpensesedit.component';
import { RvexpensesdetailComponent } from './views/rentedvehicleview/rvexpenses/rvexpensesdetail/rvexpensesdetail.component';
import { RvexpenseslistComponent } from './views/rentedvehicleview/rvexpenses/rvexpenseslist/rvexpenseslist.component';
import { RvincomecreateComponent } from './views/rentedvehicleview/rvincome/rvincomecreate/rvincomecreate.component';
import { RvincomeeditComponent } from './views/rentedvehicleview/rvincome/rvincomeedit/rvincomeedit.component';
import { RvincomelistComponent } from './views/rentedvehicleview/rvincome/rvincomelist/rvincomelist.component';
import { RvincomedetailComponent } from './views/rentedvehicleview/rvincome/rvincomedetail/rvincomedetail.component';
import { RvipaymenttransctioncreateComponent } from './views/rentedvehicleview/rvipaymenttransction/rvipaymenttransctioncreate/rvipaymenttransctioncreate.component';
import { RvipaymenttransctioneditComponent } from './views/rentedvehicleview/rvipaymenttransction/rvipaymenttransctionedit/rvipaymenttransctionedit.component';
import { RvipaymenttransctiondetailComponent } from './views/rentedvehicleview/rvipaymenttransction/rvipaymenttransctiondetail/rvipaymenttransctiondetail.component';
import { RvipaymenttransctionlistComponent } from './views/rentedvehicleview/rvipaymenttransction/rvipaymenttransctionlist/rvipaymenttransctionlist.component';
import { RvrentcreateComponent } from './views/rentedvehicleview/rvrent/rvrentcreate/rvrentcreate.component';
import { RvrenteditComponent } from './views/rentedvehicleview/rvrent/rvrentedit/rvrentedit.component';
import { RvrentdetailComponent } from './views/rentedvehicleview/rvrent/rvrentdetail/rvrentdetail.component';
import { RvrentlistComponent } from './views/rentedvehicleview/rvrent/rvrentlist/rvrentlist.component';
import { RvrpaymenttransctioncreateComponent } from './views/rentedvehicleview/rvrpaymenttransction/rvrpaymenttransctioncreate/rvrpaymenttransctioncreate.component';
import { RvrpaymenttransctioneditComponent } from './views/rentedvehicleview/rvrpaymenttransction/rvrpaymenttransctionedit/rvrpaymenttransctionedit.component';
import { RvrpaymenttransctiondetailComponent } from './views/rentedvehicleview/rvrpaymenttransction/rvrpaymenttransctiondetail/rvrpaymenttransctiondetail.component';
import { RvrpaymenttransctionlistComponent } from './views/rentedvehicleview/rvrpaymenttransction/rvrpaymenttransctionlist/rvrpaymenttransctionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientcreateComponent,
    ClienteditComponent,
    ClientdetailComponent,
    ClientlistComponent,
    ExtendgivecontractcreateComponent,
    ExtendgivecontracteditComponent,
    ExtendgivecontractdetailComponent,
    ExtendgivecontractlistComponent,
    ExtendtakecontractcreateComponent,
    ExtendtakecontracteditComponent,
    ExtendtakecontractdetailComponent,
    ExtendtakecontractlistComponent,
    GcppaymenttransactioncreateComponent,
    GcppaymenttransactioneditComponent,
    GcppaymenttransactiondetailComponent,
    GcppaymenttransactionlistComponent,
    GivecontractcreateComponent,
    GivecontracteditComponent,
    GivecontractdetailComponent,
    GivecontractlistComponent,
    TakecontractcreateComponent,
    TakecontracteditComponent,
    TakecontractlistComponent,
    TakecontractdetailComponent,
    TcppaymenttransactioncreateComponent,
    TcppaymenttransactioneditComponent,
    TcppaymenttransactiondetailComponent,
    TcppaymenttransactionlistComponent,
    EmployeecreateComponent,
    EmployeeeditComponent,
    EmployeedetailComponent,
    EmployeelistComponent,
    EmployeepaymenteditComponent,
    EmployeepaymentdetailComponent,
    EmployeepaymentcreateComponent,
    EmployeepaymentlistComponent,
    LaboureditComponent,
    LabourcreateComponent,
    LabourdetailComponent,
    LabourlistComponent,
    LabourpaymenteditComponent,
    LabourpaymentcreateComponent,
    LabourpaymentdetailComponent,
    LabourpaymentlistComponent,
    LaboursitecreateComponent,
    LaboursiteeditComponent,
    LaboursitedetailComponent,
    LaboursitelistComponent,
    MaterialcreateComponent,
    MaterialeditComponent,
    MaterialdetailComponent,
    MateriallistComponent,
    MaterialboughtcreateComponent,
    MaterialboughteditComponent,
    MaterialboughtdetailComponent,
    MaterialboughtlistComponent,
    MaterialsoldcreateComponent,
    MaterialsoldeditComponent,
    MaterialsolddetailComponent,
    MaterialsoldlistComponent,
    MaterialstockcreateComponent,
    MaterialstockeditComponent,
    MaterialstockdetailComponent,
    MaterialstocklistComponent,
    MaterialusedcreateComponent,
    MaterialusededitComponent,
    MaterialuseddetailComponent,
    MaterialusedlistComponent,
    MbpaymenttransacioncreateComponent,
    MbpaymenttransacioneditComponent,
    MbpaymenttransaciondetailComponent,
    MbpaymenttransacionlistComponent,
    MspaymenttransactioncreateComponent,
    MspaymenttransactioneditComponent,
    MspaymenttransactiondetailComponent,
    MspaymenttransactionlistComponent,
    PeboughtcreateComponent,
    PeboughteditComponent,
    PeboughtdetailComponent,
    PeboughtlistComponent,
    PebpaymenttransctioncreateComponent,
    PebpaymenttransctioneditComponent,
    PebpaymenttransctiondetailComponent,
    PebpaymenttransctionlistComponent,
    PeepaymenttransctioncreateComponent,
    PeepaymenttransctioneditComponent,
    PeepaymenttransctiondetailComponent,
    PeepaymenttransctionlistComponent,
    PeexpensescreateComponent,
    PeexpenseseditComponent,
    PeexpensesdetailComponent,
    PeexpenseslistComponent,
    PeincomecreateComponent,
    PeincomeeditComponent,
    PeincomedetailComponent,
    PeincomelistComponent,
    PeipaymenttransactioncreateComponent,
    PeipaymenttransactioneditComponent,
    PeipaymenttransactiondetailComponent,
    PeipaymenttransactionlistComponent,
    PersonalequipmentcreateComponent,
    PersonalequipmenteditComponent,
    PersonalequipmentdetailComponent,
    PersonalequipmentlistComponent,
    SitecreateComponent,
    SiteeditComponent,
    SitedetailComponent,
    SitelistComponent,
    UsercreateComponent,
    UsereditComponent,
    UserdetailComponent,
    UserlistComponent,
    VendorcreateComponent,
    VendoreditComponent,
    VendordetailComponent,
    VendorlistComponent,
    PersonalvehiclecreateComponent,
    PersonalvehicleeditComponent,
    PersonalvehicledetailComponent,
    PersonalvehiclelistComponent,
    PvboughtComponent,
    PvboughtcreateComponent,
    PvboughteditComponent,
    PvboughtdetailComponent,
    PvboughtlistComponent,
    PvbpaymenttransactioncreateComponent,
    PvbpaymenttransactioneditComponent,
    PvbpaymenttransactiondetailComponent,
    PvbpaymenttransactionlistComponent,
    PvepaymenttransactioncreateComponent,
    PvepaymenttransactioneditComponent,
    PvepaymenttransactiondetailComponent,
    PvepaymenttransactionlistComponent,
    PvepensescreateComponent,
    PvepenseseditComponent,
    PvepensesdetailComponent,
    PvepenseslistComponent,
    PvincomecreateComponent,
    PvincomeeditComponent,
    PvincomedetailComponent,
    PvincomelistComponent,
    PvipaymenttransctioncreateComponent,
    PvipaymenttransctiondetailComponent,
    PvipaymenttransctioneditComponent,
    PvipaymenttransctionlistComponent,
    ReepaymenttransactioncreateComponent,
    ReepaymenttransactioneditComponent,
    ReepaymenttransactiondetailComponent,
    ReepaymenttransactionlistComponent,
    ReexpensescreateComponent,
    ReexpenseseditComponent,
    ReexpensesdetailComponent,
    ReexpenseslistComponent,
    ReincomecreateComponent,
    ReincomeeditComponent,
    ReincomedetailComponent,
    ReincomelistComponent,
    ReipaymenttransctioncreateComponent,
    ReipaymenttransctioneditComponent,
    ReipaymenttransctiondetailComponent,
    ReipaymenttransctionlistComponent,
    RentedequipmentcreateComponent,
    RentedequipmentdetailComponent,
    RentedequipmentdeleteComponent,
    RentedequipmenteditComponent,
    RentedequipmentlistComponent,
    RerentcreateComponent,
    RerenteditComponent,
    RerentdetailComponent,
    RerentlistComponent,
    RerpaymenttransactioncreateComponent,
    RerpaymenttransactioneditComponent,
    RerpaymenttransactiondetailComponent,
    RerpaymenttransactionlistComponent,
    RentedvehiclecreateComponent,
    RentedvehicleeditComponent,
    RentedvehicledetailComponent,
    RentedvehiclelistComponent,
    RvepaymenttransctioncreateComponent,
    RvepaymenttransctioneditComponent,
    RvepaymenttransctiondetailComponent,
    RvepaymenttransctionlistComponent,
    RvexpensescreateComponent,
    RvexpenseseditComponent,
    RvexpensesdetailComponent,
    RvexpenseslistComponent,
    RvincomecreateComponent,
    RvincomeeditComponent,
    RvincomelistComponent,
    RvincomedetailComponent,
    RvipaymenttransctioncreateComponent,
    RvipaymenttransctioneditComponent,
    RvipaymenttransctiondetailComponent,
    RvipaymenttransctionlistComponent,
    RvrentcreateComponent,
    RvrenteditComponent,
    RvrentdetailComponent,
    RvrentlistComponent,
    RvrpaymenttransctioncreateComponent,
    RvrpaymenttransctioneditComponent,
    RvrpaymenttransctiondetailComponent,
    RvrpaymenttransctionlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
