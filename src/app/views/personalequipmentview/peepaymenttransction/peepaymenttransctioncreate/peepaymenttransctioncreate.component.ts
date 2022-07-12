import { Component, OnInit } from '@angular/core';
import { GenericModalPopUpService } from 'src/app/services/common-service/generic.modal.popup.service';

@Component({
  selector: 'app-peepaymenttransctioncreate',
  templateUrl: './peepaymenttransctioncreate.component.html',
  styleUrls: ['./peepaymenttransctioncreate.component.css']
})
export class PeepaymenttransctioncreateComponent implements OnInit {
  title:string="Create New PEEP"
  constructor(private GenericModalPopUpService: GenericModalPopUpService) { }

  ngOnInit(): void {
  }

}
