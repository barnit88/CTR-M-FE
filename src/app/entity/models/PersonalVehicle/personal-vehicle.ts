import { AuditModel } from "../audit-model";

export class PersonalVehicle extends AuditModel {
  public VehicleName: string;
  public BrandName: string;
  public ModelName: string;
  public NumberPlate: string;
  public VehicleType: string;
  public UDF1: string;
  public UDF2: string;
}
