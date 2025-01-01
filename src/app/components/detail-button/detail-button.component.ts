import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.css']
})
export class DetailButtonComponent implements OnInit {

  //Decorators
  @Output()  detailPopUp = new EventEmitter();
  @ViewChild('dynamicButton') dynamicButtonElementRef: ElementRef;

  //public property
  class:string =""
  

  detailClass:string ="customwidth btn m-1 btn-sm btn-outline-info float-right"
  editClass:string ="customwidth btn m-1 btn-sm btn-outline-warning float-right"
  deleteClass:string ="customwidth btn m-1 btn-sm btn-outline-danger float-right"

  constructor(
    private changeDetectporRef:ChangeDetectorRef) {}

  ngOnInit(): void {
  }
  ngAfterViewInit():void{
    if(this.dynamicButtonElementRef.nativeElement.innerHTML=="Detail"){
      this.class = this.detailClass;
    }else if(this.dynamicButtonElementRef.nativeElement.innerHTML=="Edit"){
      this.class=this.editClass
    }else{
      this.class=this.deleteClass
    }
    this.changeDetectporRef.detectChanges();
  }
  emitEventForDetailPopUp(event: any) {
    this.detailPopUp.emit(event);
  }

}
