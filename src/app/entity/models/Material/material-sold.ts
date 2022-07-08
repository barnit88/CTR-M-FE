import { AuditModel } from "../audit-model";
import { Client } from "../Client/client";
import { Site } from "../Site/site";
import { Material } from "./material";

export class MaterialSold extends AuditModel {
  public MaterialId: number;
  public Material: Material;
  public ClientId: number;
  public Client: Client;
  public SiteId: number;
  public Site: Site;
  public Quantity: string;
  public Rate: number;
  public TotalPrice: number;
  public SoldDate: Date;
  public UDF1: string;
  public UDF2: string;
}
