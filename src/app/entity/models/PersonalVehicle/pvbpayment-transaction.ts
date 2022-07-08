import { AuditModel } from "../audit-model";
import { PVBought } from "./pvbought";

export class PVBPaymentTransaction extends AuditModel {
  public PVBoughtId: number;
  public PVBought: PVBought;
  public PaymentMethod: string;
  public PaymentType: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
