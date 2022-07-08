import { AuditModel } from "../audit-model";
import { Vendor } from "../Vendor/vendor";
import { PersonalVehicle } from "./personal-vehicle";

export class PVExpenses extends AuditModel {
  public PersonalVehicleId: number;
  public PersonalVehicle: PersonalVehicle;
  public VendorId: number;
  public Vendor: Vendor;
  public ExpensesType: string;
  public FromDate: Date;
  public ToDate: Date;
  public Expenses: number;
  public UDF1: string;
  public UDF2: string;
}
