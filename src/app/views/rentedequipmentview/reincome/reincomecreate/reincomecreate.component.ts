import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {REIncome} from 'src/app/entity/models/RentedEquipment/reincome';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {REIncomeService} from 'src/app/services/api-service/RentedEquipmentService/reincome.service';
import {REIncomeTitle} from 'src/app/entity/Enum/Enums';

@Component({selector: 'app-reincomecreate', templateUrl: './reincomecreate.component.html', styleUrls: ['./reincomecreate.component.css']})
export class ReincomecreateComponent implements OnInit {
    data : REIncome;
    title : REIncomeTitle.Create;

    constructor(private modelRef : BsModalRef, private reIncomeService : REIncomeService) {}

    ngOnInit(): void {}


    public reIncomeSubmit(): void {
        if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0) {
            this.AddREI();
        } else {
            this.UpdateREI();
        }
        this.modelRef.hide();
    }

    private AddREI(): void {
        this.reIncomeService.addREIncome(this.data).subscribe((response) => console.log('done with adding ' + response), (error) => console.log(error));
    }
    
    private UpdateREI(): void {
        this.reIncomeService.reiUpdate(this.data.Id, this.data).subscribe((response) => console.log('done with update' + response), (error) => console.log(error));
    }

}

