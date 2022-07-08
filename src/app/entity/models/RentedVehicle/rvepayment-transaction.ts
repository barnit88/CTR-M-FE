import { AuditModel } from "../audit-model";
import { RVExpenses } from "./rvexpenses";

export class RVEPaymentTransaction extends AuditModel {
  public RVExpensesId: number;
  public RVExpenses: RVExpenses;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
