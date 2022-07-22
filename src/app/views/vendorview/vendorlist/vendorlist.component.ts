import { Component, OnInit } from '@angular/core';
import { VendorcreateComponent } from './../vendorcreate/vendorcreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { VendordetailComponent } from './../vendordetail/vendordetail.component';
import { Vendor } from 'src/app/entity/models/Vendor/vendor';
import { window } from 'ngx-bootstrap/utils';
import { VendorService } from './../../../services/api-service/VendorService/vendor.service';
@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css']
})
export class VendorlistComponent implements OnInit {
  vendorData: Vendor[]=[];
  width: 0;
  constructor( private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private vendorService:VendorService) {}

  ngOnInit(): void {}
  title: string = 'Vendors List';

  onGetRVEPaymentList(): any{
    this.vendorService.getVendorList().subscribe(
      (response)=> response.map(response=>{
        return this.vendorData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  RVEPayment  list") 
    );
    console.log(this.vendorData)
  }
  onGetSingleRVEPayment(id:number): any{
    this.vendorService.getVendorById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  RVEPayment  by id '));
    
  }
  getRVEPaymentById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.vendorService.deleteVendorById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  RVEPayment ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<Vendor>(VendorcreateComponent, 
      new Vendor(),
      'Create Vendor List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Vendor>(VendordetailComponent,
      this.vendorData.find(each => each.Id == id),
      "Vendor Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Vendor>(VendorcreateComponent,
      this.vendorData.find(each => each.Id == id),
      "Vendor Edit");
  }

  getWindowEvent(event:any){
    return console.log(event)
  }

}
