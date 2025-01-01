import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class GenericDetailPopUpService {
  constructor(private modalService: BsModalService) {}

  openDetailModal(component: any, obj: any) {
    this.modalService.show(component, {
      initialState: {
        title: obj.title,
        id: obj.id,
      },
      class: 'modal-lg',
      backdrop: true,
      ignoreBackdropClick: true,
    });
  }
}
