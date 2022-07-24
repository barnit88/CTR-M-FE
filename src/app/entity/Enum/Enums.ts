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

//Client Related Component ma huney page ko title should be in this enum
export enum ClientTitle{
    Create = "Create Client",
    List= "List Clients",
    Delete = "Delete Client",
    Edit = "Edit Client",
    Detail = "Client Detail"
}

@Injectable({
    providedIn:"root"
})
export class ClientTitles{
    public  Detail:string = ClientTitle.Detail;
    public  Create:string = ClientTitle.Create;
    public  Edit:string = ClientTitle.Edit;
    public  Delete:string = ClientTitle.Delete; 
    public  List:string = ClientTitle.Delete; 
}
//

export enum ExtendGiveContractTitle{
    Create = "Create Given Contract Extension",
    List= "List Given Contract Extension",
    Delete = "Delete Given Contract Extension",
    Edit = "Edit Given Contract Extension",
    Detail = "Given Contract Extension Detail"
}

@Injectable({
    providedIn:"root"
})
export class ExtendGiveContractTitles{
    public  Detail:string = ExtendGiveContractTitle.Detail;
    public  Create:string = ExtendGiveContractTitle.Create;
    public  Edit:string = ExtendGiveContractTitle.Edit;
    public  Delete:string = ExtendGiveContractTitle.Delete; 
    public  List:string = ExtendGiveContractTitle.Delete; 
}

export enum ExtendTakeContractTitle{
    Create = "Create Extended Contract Taken",
    List= "List Extended Contract Taken",
    Delete = "Delete Extended Contract Taken",
    Edit = "Edit Extended Contract Taken",
    Detail = "Extended Contract Taken Detail"
}

@Injectable({
    providedIn:"root"
})
export class ExtendTakeContractTitles{
    public  Detail:string = ExtendTakeContractTitle.Detail;
    public  Create:string = ExtendTakeContractTitle.Create;
    public  Edit:string = ExtendTakeContractTitle.Edit;
    public  Delete:string = ExtendTakeContractTitle.Delete; 
    public  List:string = ExtendTakeContractTitle.Delete; 
}

 export enum GCPaymentTransactionTitle{
    Create = "Create Given Contract Payment Transaction",
    List= "List Given Contract Payment Transaction",
    Delete = "Delete Given Contract Payment Transaction",
    Edit = "Edit Given Contract Payment Transaction",
    Detail = "Given Contract Payment Transaction Detail"
}

@Injectable({
    providedIn:"root"
})
export class GCPaymentTransactionTitles{
    public  Detail:string = GCPaymentTransactionTitle.Detail;
    public  Create:string = GCPaymentTransactionTitle.Create;
    public  Edit:string = GCPaymentTransactionTitle.Edit;
    public  Delete:string = GCPaymentTransactionTitle.Delete; 
    public  List:string = GCPaymentTransactionTitle.Delete; 
}

export enum GiveContractTitle{
    Create = "Create Give Contract",
    List= "List Given Contract",
    Delete = "Delete Given Contract",
    Edit = "Edit Given Contract",
    Detail = "Given Contract Detail"
}

@Injectable({
    providedIn:"root"
})
export class GiveContractTitles{
    public  Detail:string = GiveContractTitle.Detail;
    public  Create:string = GiveContractTitle.Create;
    public  Edit:string = GiveContractTitle.Edit;
    public  Delete:string = GiveContractTitle.Delete; 
    public  List:string = GiveContractTitle.Delete; 
}

export enum TakeContractTitle{
    Create = "Create Take Contract",
    List= "Contract Taken List",
    Delete = "Delete Taken Contract",
    Edit = "Edit Taken Contract",
    Detail = "Contract Taken Detail"
}

@Injectable({
    providedIn:"root"
})
export class TakeContractTitles{
    public  Detail:string = TakeContractTitle.Detail;
    public  Create:string = TakeContractTitle.Create;
    public  Edit:string = TakeContractTitle.Edit;
    public  Delete:string = TakeContractTitle.Delete; 
    public  List:string = TakeContractTitle.Delete; 
}

export enum TCPaymentTransactionTitle{
    Create = "Create Take Contract Payment Transaction",
    List= "Taken Contract Payment Transaction List",
    Delete = "Delete Taken Contract Payment Transaction",
    Edit = "Edit Taken Contract Payment Transaction",
    Detail = "Taken Contract Payment Transaction Detail"
}


export enum EmployeeTitle{
    Create = "Create Employee ",
    List= "Employee List",
    Delete = "Delete Employee",
    Edit = "Edit Employee",
    Detail = "Employee Detail"
}

export enum EmployeePaymentTitle{
    Create = "Create Employee Payment",
    List= "Employee Payment List",
    Delete = "Delete Employee Payment",
    Edit = "Edit Employee Payment",
    Detail = "Employee Payment Detail"
}


export enum LabourTitle{
    Create = "Create Labour",
    List= "Labour List",
    Delete = "Delete Labour",
    Edit = "Edit Labour",
    Detail = "Labour Detail"
}



export enum LabourPaymentTitle{
    Create = "Create Labour Payment",
    List= "Labour Payment List",
    Delete = "Delete Labour Payment",
    Edit = "Edit Labour Payment",
    Detail = "Labour Payment Detail"
}


export enum LabourSiteTitle{
    Create = "Create Labour Site",
    List= "Labour Site List",
    Delete = "Delete Labour Site",
    Edit = "Edit Labour Site",
    Detail = "Labour Site Detail"
}

export enum MaterialTitle{
    Create = "Create Material",
    List= "Material List",
    Delete = "Delete Material",
    Edit = "Edit Material",
    Detail = "Material Detail"
}


export enum MaterialBoughtTitle{
    Create = "Create Material Bought",
    List= "Material Bought List",
    Delete = "Delete Material Bought",
    Edit = "Edit Material Bought",
    Detail = "Material Bought Detail"
}


export enum MaterialSoldTitle{
    Create = "Create Material Sold",
    List= "Material Sold List",
    Delete = "Delete Material Sold",
    Edit = "Edit Material Sold",
    Detail = "Material Sold Detail"
}




export enum MaterialStockTitle{
    Create = "Create Material Stock",
    List= "Material Stock List",
    Delete = "Delete Material Stock",
    Edit = "Edit Material Stock",
    Detail = "Material Stock Detail"
}



export enum MaterialUsedTitle{
    Create = "Create Material Used",
    List= "Material Used List",
    Delete = "Delete Material Used",
    Edit = "Edit Material Used",
    Detail = "Material Used Detail"
}


export enum MBPaymentTransactionTitle{
    Create = "Create Material Bought Payment Transaction",
    List= "Material Bought Payment Trasaction List",
    Delete = "Delete Material Bought Payment Trasaction",
    Edit = "Edit Material Bought Payment Trasaction",
    Detail = "Material Bought Payment Trasaction Detail"
}

@Injectable({
    providedIn:"root"
})
export class MBPaymentTransactionTitles{
    public  Detail:string = MBPaymentTransactionTitle.Detail;
    public  Create:string = MBPaymentTransactionTitle.Create;
    public  Edit:string = MBPaymentTransactionTitle.Edit;
    public  Delete:string = MBPaymentTransactionTitle.Delete; 
    public  List:string = MBPaymentTransactionTitle.Delete; 
}

export enum MSPaymentTransactionTitle{
    Create = "Create Material Sold Payment Transaction",
    List= "Material Sold Payment Trasaction List",
    Delete = "Delete Material Sold Payment Trasaction",
    Edit = "Edit Material Sold Payment Trasaction",
    Detail = "Material Sold Payment Trasaction Detail"
}

@Injectable({
    providedIn:"root"
})
export class MSPaymentTransactionTitles{
    public  Detail:string = MSPaymentTransactionTitle.Detail;
    public  Create:string = MSPaymentTransactionTitle.Create;
    public  Edit:string = MSPaymentTransactionTitle.Edit;
    public  Delete:string = MSPaymentTransactionTitle.Delete; 
    public  List:string = MSPaymentTransactionTitle.Delete; 
}

export enum PEBoughtTitle{
    Create = "Create Personal Equipment Bought",
    List= "Personal Equipment Bought List",
    Delete = "Delete Personal Equipment Bought",
    Edit = "Edit Personal Equipment Bought",
    Detail = "Personal Equipment Bought Detail"
}

@Injectable({
    providedIn:"root"
})
export class PEBoughtTitles{
    public  Detail:string = PEBoughtTitle.Detail;
    public  Create:string = PEBoughtTitle.Create;
    public  Edit:string = PEBoughtTitle.Edit;
    public  Delete:string = PEBoughtTitle.Delete; 
    public  List:string = PEBoughtTitle.Delete; 
}


export enum PEBPaymentTransactionTitle{
    Create = "Create Personal Equipment Bought Payment Transaction",
    List= "Personal Equipment Bought Payment Transaction List",
    Delete = "Delete Personal Equipment Bought Payment Transaction",
    Edit = "Edit Personal Equipment Bought Payment Transaction",
    Detail = "Personal Equipment Bought Payment Transaction Detail"
}




export enum PEEPaymentTransactionTitle{
    Create = "Create Personal Equipment Payment Transaction",
    List= "Personal Equipment Payment Transaction List",
    Delete = "Delete Personal Equipment Payment Transaction",
    Edit = "Edit Personal Equipment Payment Transaction",
    Detail = "Personal Equipment Payment Transaction Detail"
}



export enum PEExpensesTitle{
    Create = "Create Personal Equipment Expenses",
    List= "Personal Equipment Expenses List",
    Delete = "Delete Personal Equipment Expenses",
    Edit = "Edit Personal Equipment Expenses",
    Detail = "Personal Equipment Expenses Detail"
}

export enum PEIncomeTitle{
    Create = "Create Personal Equipment Income",
    List= "Personal Equipment Income List",
    Delete = "Delete Personal Equipment Income",
    Edit = "Edit Personal Equipment Income",
    Detail = "Personal Equipment Income Detail"
}


export enum PEIPaymentTransactionTitle{
    Create = "Create Personal Equipment Payment Transaction",
    List= "Personal Equipment Payment Transaction List",
    Delete = "Delete Personal Equipment Payment Transaction",
    Edit = "Edit Personal Equipment Payment Transaction",
    Detail = "Personal Equipment Payment Transaction Detail"
}



export enum PersonalEquipmentTitle{
    Create = "Create Personal Equipment",
    List= "Personal Equipment List",
    Delete = "Delete Personal Equipment",
    Edit = "Edit Personal Equipment",
    Detail = "Personal Equipment Detail"
}

export enum PersonalVehicleTitle{
    Create = "Create Personal Vehicle",
    List= "Personal Vehicle List",
    Delete = "Delete Personal Vehicle",
    Edit = "Edit Personal Vehicle",
    Detail = "Personal Vehicle Detail"
}


export enum PVBoughtTitle{
    Create = "Create Personal Vehicle Bought",
    List= "Personal Vehicle Bought List",
    Delete = "Delete Personal Vehicle Bought",
    Edit = "Edit Personal Vehicle Bought",
    Detail = "Personal Vehicle Bought Detail"
}


export enum PVBPaymentTransactionTitle{
    Create = "Create Personal Vehicle Bought Payment Transaction",
    List= "Personal Vehicle Bought Payment Transaction List",
    Delete = "Delete Personal Vehicle Bought Payment Transaction",
    Edit = "Edit Personal Vehicle Bought Payment Transaction",
    Detail = "Personal Vehicle Bought Payment Transaction Detail"
}


export enum PVEPaymentTransactionTitle{
    Create = "Create Personal Vehicle Equipment Payment Transaction",
    List= "Personal Vehicle Equipment Payment Transaction List",
    Delete = "Delete Personal Vehicle Equipment Payment Transaction",
    Edit = "Edit Personal Vehicle Equipment Payment Transaction",
    Detail = "Personal Vehicle Equipment Payment Transaction Detail"
}

export enum PVExpensesTitle{
    Create = "Create Personal Vehicle Expenses",
    List= "Personal Vehicle Expenses List",
    Delete = "Delete Personal Vehicle Expenses",
    Edit = "Edit Personal Vehicle Expenses",
    Detail = "Personal Vehicle Expenses Detail"
}


export enum PVIncomeTitle{
    Create = "Create Personal Vehicle Income",
    List= "Personal Vehicle Income List",
    Delete = "Delete Personal Vehicle Income",
    Edit = "Edit Personal Vehicle Income",
    Detail = "Personal Vehicle Income Detail"
}
export enum PVIPaymentTransactionTitle{
    Create = "Create Personal Vehicle Income Payment Transaction",
    List= "Personal Vehicle Income Payment Transaction List",
    Delete = "Delete Personal Vehicle Income Payment Transaction",
    Edit = "Edit Personal Vehicle Income Payment Transaction",
    Detail = "Personal Vehicle Income Payment Transaction Detail"
}


export enum REEPaymentTransactionTitle{
    Create = "Create Rented Equipment Payment Transaction",
    List= "Rented Equipment Payment Transaction List",
    Delete = "Delete Rented Equipment Payment Transaction",
    Edit = "Edit Rented Equipment Payment Transaction",
    Detail = "Rented Equipment Payment Transaction Detail"
}

export enum REExpensesTitle{
    Create = "Create Rented Equipment Expenses",
    List= "Rented Equipment Expenses List",
    Delete = "Delete Rented Equipment Expenses",
    Edit = "Edit Rented Equipment Expenses",
    Detail = "Rented Equipment Expenses Detail"
}

export enum REIncomeTitle{
    Create = "Create Rented Equipment Income",
    List= "Rented Equipment Income List",
    Delete = "Delete Rented Equipment Income",
    Edit = "Edit Rented Equipment Income",
    Detail = "Rented Equipment Income Detail"
}

export enum REIPaymentTransactionTitle{
    Create = "Create Rented Equipment Income Payment Transaction",
    List= "Rented Equipment Income Payment Transaction List",
    Delete = "Delete Rented Equipment Income Payment Transaction",
    Edit = "Edit Rented Equipment Income Payment Transaction",
    Detail = "Rented Equipment Income Payment Transaction Detail"
}


export enum RentedEquipmentTitle{
    Create = "Create Rented Equipment",
    List= "Rented Equipment List",
    Delete = "Delete Rented Equipment",
    Edit = "Edit Rented Equipment",
    Detail = "Rented Equipment Detail"
}


export enum RERentTitle{
    Create = "Create Rented Equipment Rent",
    List= "Rented Equipment Rent List",
    Delete = "Delete Rented Equipment Rent",
    Edit = "Edit Rented Equipment Rent",
    Detail = "Rented Equipment Rent Detail"
}


export enum RERPaymentTransactionTitle{
    Create = "Create Rented Equipment Rent Payment Transaction",
    List= "Rented Equipment Rent Payment Transaction List",
    Delete = "Delete Rented Equipment Rent Payment Transaction",
    Edit = "Edit Rented Equipment Rent Payment Transaction",
    Detail = "Rented Equipment Rent Payment Transaction Detail"
}


export enum RentedVehicleTitle{
    Create = "Create Rented Vehicle",
    List= "Rented Equipment Vehicle List",
    Delete = "Delete Rented Equipment Vehicle",
    Edit = "Edit Rented Equipment Vehicle",
    Detail = "Rented Equipment Vehicle Detail"
}

export enum RVEPaymentTransactionTitle{
    Create = "Create Rented Vehicle Equipment Payment Transaction",
    List= "Rented Vehicle Equipment Payment Transaction List",
    Delete = "Delete Rented Vehicle Equipment Payment Transaction",
    Edit = "Edit Rented Vehicle Equipment Payment Transaction",
    Detail = "Rented Vehicle Equipment Payment Transaction Detail"
}
export enum RVExpensesTitle{
    Create = "Create Rented Vehicle Expenses",
    List= "Rented Vehicle Expenses List",
    Delete = "Delete Rented Vehicle Expenses",
    Edit = "Edit Rented Vehicle Expenses",
    Detail = "Rented Vehicle Expenses Detail"
}

export enum RVIncomeTitle{
    Create = "Create Rented Vehicle Income",
    List= "Rented Vehicle Income List",
    Delete = "Delete Rented Vehicle Income",
    Edit = "Edit Rented Vehicle Income",
    Detail = "Rented Vehicle Income Detail"
}


export enum RVIPaymentTransactionTitle{
    Create = "Create Rented Vehicle Income Payment Transaction",
    List= "Rented Vehicle Income Payment Transaction List",
    Delete = "Delete Rented Vehicle Income Payment Transaction",
    Edit = "Edit Rented Vehicle Income Payment Transaction",
    Detail = "Rented Vehicle Income Payment Transaction Detail"
}

export enum RVRentTitle{
    Create = "Create Rented Vehicle Rent",
    List= "Rented Vehicle Rent List",
    Delete = "Delete Rented Vehicle Rent",
    Edit = "Edit Rented Vehicle Rent",
    Detail = "Rented Vehicle Rent Detail"
}

export enum RVRPaymentTransactionTitle{
    Create = "Create Rented Vehicle Rent Payment Transaction",
    List= "Rented Vehicle Rent Payment Transaction List",
    Delete = "Delete Rented Vehicle Rent Payment Transaction",
    Edit = "Edit Rented Vehicle Rent Payment Transaction",
    Detail = "Rented Vehicle Rent Payment Transaction Detail"
}

export enum SiteTitle{
    Create = "Create Site",
    List= "Site List",
    Delete = "Delete Site",
    Edit = "Edit Site",
    Detail = "Site Detail"
}


export enum UserTitle{
    Create = "Create User",
    List= "User List",
    Delete = "Delete User",
    Edit = "Edit User",
    Detail = "User Detail"
}

export enum VendorTitle{
    Create = "Create Vendor",
    List= "Vendor List",
    Delete = "Delete Vendor",
    Edit = "Edit Vendor",
    Detail = "Vendor Detail"
}
