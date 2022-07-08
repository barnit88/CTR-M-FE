import { AuditModel } from "../audit-model";

export class RentedEquipment extends AuditModel {
  public EquipmentName: string;
  public BrandName: string;
  public ModelName: string;
  public Type: string;
  public UDF1: string;
  public UDF2: string;
}
