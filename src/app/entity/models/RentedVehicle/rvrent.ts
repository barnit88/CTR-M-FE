import { AuditModel } from "../audit-model";
import { Site } from "../Site/site";
import { Vendor } from "../Vendor/vendor";
import { RentedVehicle } from "./rented-vehicle";

export class RVRent extends AuditModel {
  public RentedVehicleId: number;
  public RentedVehicle: RentedVehicle;
  public VendorId: number;
  public Vendor: Vendor;
  public SiteId: number;
  public Site: Site;
  public RentAmount: number;
  public FromDate: Date;
  public ToDate: Date;
  public UDF1: string;
  public UDF2: string;
}
