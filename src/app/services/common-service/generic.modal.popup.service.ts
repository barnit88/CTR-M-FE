import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class GenericModalPopUpService {
  constructor(private modalService: BsModalService) {}

  openModalPopUpService<T>(component: any, data: T,title:string, id?:number) {
    this.modalService.show(component, {
      initialState: {
        title: title,
        data: data,
        id:id,
      },
      class: 'modal-lg',
      backdrop: true,
      ignoreBackdropClick: true,
    });
  }
}
