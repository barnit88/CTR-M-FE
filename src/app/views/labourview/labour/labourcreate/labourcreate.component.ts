import {Component, OnInit} from '@angular/core';
import {Labour} from './../../../../entity/models/Labour/labour';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LabourService } from './../../../../services/api-service/LabourService/labour.service';
import { LabourTitle } from 'src/app/entity/Enum/Enums';

@Component({selector: 'app-labourcreate', templateUrl: './labourcreate.component.html', styleUrls: ['./labourcreate.component.css']})
export class LabourcreateComponent implements OnInit {
    data:Labour;
    title:LabourTitle.Create;
    constructor(private modelRef: BsModalRef,
        private labourService: LabourService,
    ) {}
    
    ngOnInit(): void { 
        console.log('at component initalization'+this.data);
        
     }

    public onLabourSubmit(): void {
        console.log('submit works')
        console.log(this.data);
        
        if (this.data.Id === undefined || this.data.Id === null || this.data.Id === 0){
            this.AddLabour();
        } else {
            this.UpdateLabour();
        }
        this.modelRef.hide();
    }

    private AddLabour(): void {
        this.labourService.addLabour(this.data).subscribe(
            (resposne)=> console.log('done with response'+ resposne.ContactNo),
            (error)=> console.log(error)
        )
    }

    private UpdateLabour(): void{
        this.labourService.labourUpdate(this.data.Id, this.data).subscribe(
            (response)=> console.log('done with update'+ response),
        (error)=> console.log(error)
        )
    }

}

 