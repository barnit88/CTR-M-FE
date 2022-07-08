import { AuditModel } from "../audit-model";
import { RVIncome } from "./rvincome";

export class RVIPaymentTransaction extends AuditModel {
  public RVIncomeId: number;
  public RVIncome: RVIncome;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
