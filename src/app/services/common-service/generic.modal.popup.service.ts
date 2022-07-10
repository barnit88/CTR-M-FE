import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class GenericModalPopUpService {
  constructor(private modalService: BsModalService) {}

  openDetailModal(component: any, obj: any) {
    this.modalService.show(component, {
      initialState: {
        title: obj.title,
        data: {
          id: 'dummy',
        },
      },
      class: 'modal-lg',
      backdrop: true,
      ignoreBackdropClick: true,
    });
  }
}
