import { AuditModel } from "../audit-model";
import { PEBought } from "./pebought";

export class PEBPaymentTransaction extends AuditModel {
  public PEBoughtId: number;
  public PEBought: PEBought;
  public PaymentMethod: string;
  public PaymentType: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
