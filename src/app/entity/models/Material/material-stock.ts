import { AuditModel } from "../audit-model";
import { Site } from "../Site/site";
import { Material } from "./material";

export class MaterialStock extends AuditModel {
  public MaterialId: number;
  public Material: Material;
  public SIteId: number;
  public Site: Site;
  public Quantity: string;
  public UDF1: string;
  public UDF2: string;
}
