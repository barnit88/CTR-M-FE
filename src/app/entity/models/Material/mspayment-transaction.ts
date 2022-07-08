import { AuditModel } from "../audit-model";
import { MaterialSold } from "./material-sold";

export class MSPaymentTransaction extends AuditModel {
  public MaterialSoldId: number;
  public MaterialSold: MaterialSold;
  public Payment: number;
  public PaymentMethod: string;
  public PaymentType: string;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
