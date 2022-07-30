import { Component, OnInit } from '@angular/core';
import { SitecreateComponent } from './../sitecreate/sitecreate.component';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';
import { ClientdetailComponent } from '../../clientview/clientdetail/clientdetail.component';
import { GenericDetailPopUpService } from 'src/app/services/common-service/generic.detail.popup.service';
import { SitedetailComponent } from './../sitedetail/sitedetail.component';
import { Site } from 'src/app/entity/models/Site/site';
import { SiteService } from './../../../services/api-service/SiteService/site.service';
@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent implements OnInit {
  siteData: Site[]=[];
  title:string="Site"
  constructor(private genericModalPopUpService: GenericModalPopUpService,
     private genericDetailPopUpService:GenericDetailPopUpService,
     private siteService:SiteService) {}
  ngOnInit(): void {
    this.onGetSiteList();
  }

  onGetSiteList(): any{
    this.siteService.getList().subscribe(
      (response)=> response.map(response=>{
        return this.siteData.push(response)
      }),
      (error:any)=> console.log(error),
      ()=> console.log("Done with fetching  Site  list") 
    );
    console.log(this.siteData)
  }
  onGetSingleSite(id:number): any{
    this.siteService.getSiteById(id).subscribe(
      (response)=> console.log(response),
      (error:any)=> console.log(error),
      ()=> console.log('done with geeting single  Site  by id '));
    
  }
  getSiteById(id:number): any {  
    var ans = confirm("Do you want to delete  REE  with Id: " + id);  
    if (ans) {  
        this.siteService.deleteSiteById(id).subscribe((data: any) => { 
          console.log('Sucess on deleting  Site ')
        }, (error: any) => console.error(error))  
    } else return this.ngOnInit();
}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<Site>(SitecreateComponent, 
      new Site(),
      'Create Site List',
    );
  }
  //function for details popup
  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Site>(SitedetailComponent,
      this.siteData.find(each => each.Id == id),
      "Site Details");
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Site>(SitecreateComponent,
      this.siteData.find(each => each.Id == id),
      "Site Edit");
  }
}
