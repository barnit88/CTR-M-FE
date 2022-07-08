import { AuditModel } from "../audit-model";
import { PEExpenses } from "./peexpenses";

export class PEEPaymentTransaction extends AuditModel {
  public PEExpensesId: number;
  public PEExpenses: PEExpenses;
  public Payment: number;
  public PaymentMethod: string;
  public PaymentType: string;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
