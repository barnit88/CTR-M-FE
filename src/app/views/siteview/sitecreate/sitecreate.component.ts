import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Site } from 'src/app/entity/models/Site/site';
import { SiteService } from './../../../services/api-service/SiteService/site.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SiteTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-sitecreate',
  templateUrl: './sitecreate.component.html',
  styleUrls: ['./sitecreate.component.css']
})
export class SitecreateComponent implements OnInit {
  data:Site;
  title:SiteTitle.Create;

  constructor(private siteService: SiteService,
    private modelRef: BsModalRef) { }

  ngOnInit(): void {
  }
  onSiteSubmit(){
    console.log(this.data);
    if(this.data.Id === undefined || this.data.Id === null || this.data.Id ===0){
        this.AddSite();
    } else{
      this.UpdateSite();
    }
    this.modelRef.hide();
    
  }

  private AddSite(): void{
    this.siteService.addSite(this.data).subscribe(
      (response)=> console.log('done with adding'+ response),
      (error)=> console.log(error)
    )
  }

  private UpdateSite(): void{
    this.siteService.updateSite(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update'+response),
      (error)=> console.log(error)
    )
  }




}
