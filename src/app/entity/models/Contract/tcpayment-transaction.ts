import { AuditModel } from "../audit-model";
import { TakeContract } from "./take-contract";

export class TCPaymentTransaction extends AuditModel {
  public TakeContractId: number;
  public TakeContract: TakeContract;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
