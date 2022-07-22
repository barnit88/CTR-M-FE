import { Injectable } from "@angular/core";

enum Button{
    Detail = "Detail",
    Create="Create",
    Edit="Edit",
    Delete="Delete"
}
@Injectable({
    providedIn:"root"
})
export class Buttons{
    public  Detail:string = Button.Detail;
    public  Create:string = Button.Create;
    public  Edit:string = Button.Edit;
    public  Delete:string = Button.Delete;
}
