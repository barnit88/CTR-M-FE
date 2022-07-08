import { AuditModel } from "../audit-model";
import { Vendor } from "../Vendor/vendor";
import { RentedEquipment } from "./rented-equipment";

export class REExpenses extends AuditModel {
  public RentedEquipmentId: number;
  public RentedEquipment: RentedEquipment;
  public VendorId: number;
  public Vendor: Vendor;
  public ExpensesType: string;
  public FromDate: Date;
  public ToDate: Date;
  public Expenses: number;
  public UDF1: string;
  public UDF2: string;
}
