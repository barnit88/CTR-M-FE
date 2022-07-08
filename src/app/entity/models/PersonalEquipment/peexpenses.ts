import { AuditModel } from "../audit-model";
import { Vendor } from "../Vendor/vendor";
import { PersonalEquipment } from "./personal-equipment";

export class PEExpenses extends AuditModel {
  public PersonalEquipmentId: number;
  public PersonalEquipment: PersonalEquipment;
  public VendorId: number;
  public Vendor: Vendor;
  public ExpensesType: string;
  public FromDate: Date;
  public ToDate: Date;
  public Expenses: number;
  public UDF1: string;
  public UDF2: string;
}
