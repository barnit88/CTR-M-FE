import { AuditModel } from "../audit-model";
import { Vendor } from "../Vendor/vendor";
import { RentedVehicle } from "./rented-vehicle";

export class RVExpenses extends AuditModel {
  public RentedVehicleId: number;
  public RentedVehicle: RentedVehicle;
  public VendorId: number;
  public Vendor: Vendor;
  public ExpensesType: string;
  public FromDate: Date;
  public ToDate: Date;
  public Expenses: number;
  public UDF1: string;
  public UDF2: string;
}
