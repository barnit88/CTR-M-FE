import { Component, OnInit } from "@angular/core";
import { ClientdetailComponent } from "./../clientdetail/clientdetail.component";
import { GenericModalPopUpService } from "src/app/services/common-service/generic.modal.popup.service";
import { GenericDetailPopUpService } from "src/app/services/common-service/generic.detail.popup.service";
import { ClientcreateComponent } from "../clientcreate/clientcreate.component";
import { ClientService } from "./../../../services/api-service/ClientService/client.service";
import { Client } from "src/app/entity/models/Client/client";
import { filter } from "rxjs";
import { Buttons } from "src/app/entity/Enum/Enums";
@Component({
  selector: "app-clientlist",
  templateUrl: "./clientlist.component.html",
  styleUrls: ["./clientlist.component.css"],
})
export class ClientlistComponent implements OnInit {
  data: Client[] = [];
  title: string = "Client Details";
  constructor(
    private genericDetailPopUpService: GenericDetailPopUpService,
    private genericModalPopUpService: GenericModalPopUpService,
    private clientService: ClientService,
    public buttonTitle: Buttons
  ) {}

  ngOnInit(): void {}

  OpenModalPopUp() {
    this.genericModalPopUpService.openModalPopUpService<Client>(
      ClientcreateComponent,
      new Client(),
      "Create Employee payment List"
    );
  }

  OpenDetailPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Client>(
      ClientdetailComponent,
      this.data.find((x) => x.Id == id),
      "Employee Payment Details"
    );
  }

  OpenEditPopUp(id: number) {
    this.genericModalPopUpService.openModalPopUpService<Client>(
      ClientcreateComponent,
      this.data.find((x) => x.Id == id),
      "Employee Payment Edit"
    );
  }
}
