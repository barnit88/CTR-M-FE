import { AuditModel } from "../audit-model";
import { LabourSite } from "./labour-site";

export class LabourPayment extends AuditModel {
  public LabourSiteId: number;
  public LabourSite: LabourSite;
  public FromDate: Date;
  public ToDate: Date;
  public PaymentRate: number;
  public Period: number;
  public Payment: number;
  public UDF1: string;
  public UDF2: string;
}
