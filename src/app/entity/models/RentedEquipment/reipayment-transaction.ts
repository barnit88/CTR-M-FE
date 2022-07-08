import { AuditModel } from "../audit-model";
import { REIncome } from "./reincome";

export class REIPaymentTransaction extends AuditModel {
  public REIncomeId: number;
  public REIncome: REIncome;
  public PaymentMethod: string;
  public PaymentType: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
