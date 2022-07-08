import { AuditModel } from "../audit-model";
import { Site } from "../Site/site";
import { Vendor } from "../Vendor/vendor";
import { Material } from "./material";

export class MaterialBought extends AuditModel {
  public MaterialId: number;
  public Material: Material;
  public VendorId: number;
  public Vendor: Vendor;
  public SiteId: number;
  public Site: Site;
  public Quantity: string;
  public Rate: number;
  public TotalPrice: number;
  public BoughtDate: Date;
  public UDF1: string;
  public UDF2: string;
}
