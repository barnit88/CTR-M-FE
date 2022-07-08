import { AuditModel } from "../audit-model";
import { PVIncome } from "./pvincome";

export class PVIPaymentTransaction extends AuditModel {
  public PVIncomeID: number;
  public PVIncome: PVIncome;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
