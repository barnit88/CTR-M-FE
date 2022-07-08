import { AuditModel } from "../audit-model";
import { Site } from "../Site/site";
import { Labour } from "./labour";

export class LabourSite extends AuditModel {
  public LabourId: number;
  public Labour: Labour;
  public LabourType: string;
  public LabourPaymentType: string;
  public SiteId: number;
  public Site: Site;
  public UDF1: string;
  public UDF2: string;
}
