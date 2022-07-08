import { AuditModel } from "../audit-model";
import { Vendor } from "../Vendor/vendor";
import { PersonalVehicle } from "./personal-vehicle";

export class PVBought extends AuditModel {
  public PersonalVehicleId: number;
  public PersonalVehicle: PersonalVehicle;
  public VendorId: number;
  public Vendor: Vendor;
  public BoughtPrice: number;
  public BoughtDate: Date;
  public UDF1: string;
  public UDF2: string;
}
