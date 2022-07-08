import { AuditModel } from "../audit-model";
import { GiveContract } from "./give-contract";

export class GCPaymentTransaction extends AuditModel {
  public GiveContractId: number;
  public GiveContract: GiveContract;
  public PaymentType: string;
  public PaymentMethod: string;
  public Payment: number;
  public PaymentDate: Date;
  public UDF1: string;
  public UDF2: string;
}
