import { AuditModel } from "../audit-model";
import { RERent } from "./rerent";

export class RERPaymentTransaction extends AuditModel {
  public RERentId: number;
  public RERent: RERent;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
