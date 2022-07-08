import { NumberValueAccessor } from "@angular/forms";
import { AuditModel } from "../audit-model";
import { Vendor } from "../Vendor/vendor";
import { PersonalEquipment } from "./personal-equipment";

export class PEBought extends AuditModel {
  public PersonalEquipmentId: number;
  public PersonalEquipment: PersonalEquipment;
  public VendorId: number;
  public Vendor: Vendor;
  public BoughtPrice: number;
  public BoughtDate: Date;
  public UDF1: string;
  public UDF2: string;
}
