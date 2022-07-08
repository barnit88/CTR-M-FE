import { AuditModel } from "../audit-model";
import { PVExpenses } from "./pvexpenses";

export class PVEPaymentTransaction extends AuditModel {
  public PVExpensesId: number;
  public PVExpenses: PVExpenses;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
