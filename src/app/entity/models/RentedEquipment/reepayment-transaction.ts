import { AuditModel } from "../audit-model";
import { REExpenses } from "./reexpenses";

export class REEPaymentTransaction extends AuditModel {
  public REExpensesId: number;
  public REExpenses: REExpenses;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: string;
  public PaymentDate: string;
  public UDF1: string;
  public UDF2: string;
}
