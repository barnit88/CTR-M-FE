import { Component, OnInit } from '@angular/core';
import { MaterialBought } from './../../../../entity/models/Material/material-bought';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MaterialBoughtService } from './../../../../services/api-service/MaterialService/material-bought.service';
import { MaterialBoughtTitle } from 'src/app/entity/Enum/Enums';
import { MaterialService } from './../../../../services/api-service/MaterialService/material.service';
import { pipe } from 'rxjs';
import { Material } from 'src/app/entity/models/Material/material';
import { SiteService } from './../../../../services/api-service/SiteService/site.service';
import { Site } from 'src/app/entity/models/Site/site';
import { Vendor } from 'src/app/entity/models/Vendor/vendor';
import { VendorService } from './../../../../services/api-service/VendorService/vendor.service';


@Component({
  selector: 'app-materialboughtcreate',
  templateUrl: './materialboughtcreate.component.html',
  styleUrls: ['./materialboughtcreate.component.css']
})
export class MaterialboughtcreateComponent implements OnInit {
  data:MaterialBought;
  title:MaterialBoughtTitle.Create;
  materials:Material[]=[];
  sites: Site[]=[];
  vendors: Vendor[]=[];
  constructor(private modelRef: BsModalRef,
    private materialBoughtService: MaterialBoughtService,
    private materialService:MaterialService,
    private siteService: SiteService,
    private vendorService:VendorService) { }

  ngOnInit(): void {
    this.MaterialList();   
    this.SiteList();  
    this.VenodrList();   
  }

  check(Material){
    console.log(Material);
  }

  assignMaterialId(event:Event): any{
    console.log(event.target)
  }
  public SiteList(): void{
    this.siteService.getList().subscribe(
      (data)=> this.sites = data,
      (error)=> console.log(error));
  }

  public MaterialList(): any{
    this.materialService.getMaterialList().subscribe(
      (data)=>this.materials = data,
      (error)=> console.log(error));
  }

  public VenodrList(): void{
    this.vendorService.getVendorList().subscribe(
      (data)=> this.vendors = data,
      (error)=> console.log(error));
  }
  


  public materialBoughtSubmit(): void{
    console.log(this.data);
    if( this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
      this.AddMaterialBought();
    }else{
      this.UpdateMaterialBought();
    }
    
  }
  private AddMaterialBought(): void{
    this.materialBoughtService.addMaterialBought(this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error
    ));
  }

  private UpdateMaterialBought(): void{
    this.materialBoughtService.mbUpdate(this.data.Id, this.data).subscribe(
      (response)=> console.log(response),
      (error)=> console.log(error)
    );
  }


}
