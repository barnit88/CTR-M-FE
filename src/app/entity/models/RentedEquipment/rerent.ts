import { AuditModel } from "../audit-model";
import { Site } from "../Site/site";
import { Vendor } from "../Vendor/vendor";
import { RentedEquipment } from "./rented-equipment";

export class RERent extends AuditModel {
  public RentedEquipmentId: number;
  public RentedEquipment: RentedEquipment;
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
