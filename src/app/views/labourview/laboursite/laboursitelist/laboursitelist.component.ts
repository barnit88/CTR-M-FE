import { Component, OnInit } from '@angular/core';
import { LaboursitecreateComponent } from './../laboursitecreate/laboursitecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { LaboursitedetailComponent } from './../laboursitedetail/laboursitedetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { LabourSite } from 'src/app/entity/models/Labour/labour-site';
import { LabourSiteService } from './../../../../services/api-service/LabourService/labour-site.service';
@Component({
  selector: 'app-laboursitelist',
  templateUrl: './laboursitelist.component.html',
  styleUrls: ['./laboursitelist.component.css']
})
export class LaboursitelistComponent implements OnInit {
  labourSiteData : LabourSite[]=[];
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService: GenericDetailPopUpService,
     private labourSiteService:LabourSiteService) {}

  ngOnInit(): void {}
  title: string = 'labour Site List';

  onGetLabourSiteList(): any{
    this.labourSiteService.getLabourSiteList().subscribe(
      (response)=> response.map(response=>{
        return this.labourSiteData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching Labour site list") 
    );
    console.log(this.labourSiteData)
  }
  onGetSingleLabourSite(id:number): any{
    this.labourSiteService.getLabourSiteById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single Labour site by id ')
    );
  }
  
  onDeleteLabourSite(id:number): any {  
    var ans = confirm("Do you want to delete customer with Id: " + id);  
    if (ans) {  
        this.labourSiteService.deleteLabourSiteById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting labour site')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}  
  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<LabourSite>(LaboursitecreateComponent, 
      new LabourSite(),
      'Create Labour Site  List',
    );
  }
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<LabourSite>(LaboursitedetailComponent,
      this.labourSiteData.find(each => each.Id == id),
      "Labour Site  Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<LabourSite>(LaboursitecreateComponent,
      this.labourSiteData.find(each => each.Id == id),
      "Labour Site  Edit");
  }
}
