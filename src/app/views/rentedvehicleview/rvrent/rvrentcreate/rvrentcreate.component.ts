import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RVRent } from './../../../../entity/models/RentedVehicle/rvrent';
import { RVRentService } from './../../../../services/api-service/RentedVehicleService/rvrent.service';
import { RVRentTitle } from 'src/app/entity/Enum/Enums';

@Component({
  selector: 'app-rvrentcreate',
  templateUrl: './rvrentcreate.component.html',
  styleUrls: ['./rvrentcreate.component.css']
})
export class RvrentcreateComponent implements OnInit {
  data:RVRent;
  title:RVRentTitle.Create;

  constructor(private modelRef: BsModalRef,
    private rvRentService: RVRentService) { }

  ngOnInit(): void {
  }

  public rvRentSubmit(): void{
    if (this.data.Id === undefined || this.data.Id === null || this.data. Id === 0 ) {
      this.AddRVR();
    } else {
      this.UpdateRVR();
    }
    this.modelRef.hide();
  }

  private AddRVR(): void{
    this.rvRentService.addRVRent(this.data).subscribe(
      (response)=> console.log('done with adding '+ response),
      (error)=> console.log(error)
    );
  }
  
  private UpdateRVR(): void {
    this.rvRentService.updateRVRent(this.data.Id, this.data).subscribe(
      (response)=> console.log('done with update '+response),
      (error)=> console.log(error)
    );
  }
}
