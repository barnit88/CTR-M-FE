import { AuditModel } from "../audit-model";
import { TakeContract } from "./take-contract";

export class ExtendTakeContract extends AuditModel {
  public TakeContractId: number;
  public TakeContract: TakeContract;
  public AdditionalPeriod: number;
  public DateFrom: Date;
  public ToDate: Date;
  public AdditionalBudget: number;
  public UDF1: string;
  public UDF2: string;
}
