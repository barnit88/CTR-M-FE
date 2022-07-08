import { AuditModel } from "../audit-model";

export class Material extends AuditModel {
  public MaterialName: string;
  public MeasurementType: string;
  public UDF1: string;
  public UDF2: string;
}
