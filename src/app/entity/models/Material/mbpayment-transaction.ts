import { MaterialBought } from "./material-bought";
import { AuditModel } from './../audit-model';

export class MBPaymentTransaction extends AuditModel {
  public MaterialBoughtId: number;
  public MaterialBought: MaterialBought;
  public Payment: number;
  public PaymentMethod: string;
  public PaymentType: string;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
