import { AuditModel } from "../audit-model";
import { Site } from "../Site/site";
import { Material } from "./material";

export class MaterialUsed extends AuditModel {
  public MaterialId: number;
  public Material: Material;
  public SiteId: number;
  public Site: Site;
  public Quantity: string;
  public UDF1: string;
  public UDF2: string;
}
