import { AuditModel } from "../audit-model";
import { RVRent } from "./rvrent";

export class RVRPaymentTransaction extends AuditModel {
  public RVRentId: number;
  public RVRent: RVRent;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
