import { AuditModel } from "../audit-model";
import { PEIncome } from "./peincome";

export class PEIPaymentTransaction extends AuditModel {
  public PEIncomeId: number;
  public PEIncome: PEIncome;
  public Payment: number;
  public PaymentMethod: string;
  public PaymentType: string;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
