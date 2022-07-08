import { NumberValueAccessor } from "@angular/forms";
import { AuditModel } from "../audit-model";
import { GiveContract } from "./give-contract";

export class ExtendGiveContract extends AuditModel {
  public GiveContractId: number;
  public GiveContract: GiveContract;
  public AdditionalPeriod: number;
  public DateFrom: Date;
  public ToDate: Date;
  public AdditionalBudget: number;
  public UDF1: string;
  public UDF2: string;
}
