import { AuditModel } from "../audit-model";

export class Labour extends AuditModel {
  public FirstName: string;
  public MiddleName: string;
  public LastName: string;
  public State: string;
  public District: string;
  public Muncipality: string;
  public ContactNo: string;
  public Email: string;
  public IdentityType: string;
  public IdentityNo: string;
  public LabourType: string;
  public DateOfBirth: Date;
  public UDF1: string;
  public UDF2: string;
}
