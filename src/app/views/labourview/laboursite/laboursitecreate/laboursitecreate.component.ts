import { Component, OnInit } from '@angular/core';
import { LabourSite } from './../../../../entity/models/Labour/labour-site';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LabourSiteService } from './../../../../services/api-service/LabourService/labour-site.service';
import { LabourSiteTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-laboursitecreate',
  templateUrl: './laboursitecreate.component.html',
  styleUrls: ['./laboursitecreate.component.css']
})
export class LaboursitecreateComponent implements OnInit {
  data: LabourSite;
  title:LabourSiteTitle.Create;
   
  constructor(private modelRef: BsModalRef,
    private labourSiteService: LabourSiteService,
    ) { }

  ngOnInit(): void {
  }

   public labourSiteSubmit(){
    if ( this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
      this.AddLabourSite();
    } else {
      this.UpdateLabourSite();
    }
    this.modelRef.hide();
  }
  private AddLabourSite(): void{
    this.labourSiteService.addLabourSite(this.data).subscribe(
      (response)=> console.log('done with adding'+ response),
      (error)=> console.log(error),
    );
  }
  private UpdateLabourSite(): void{
    this.labourSiteService.lsUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    )
  }

}
