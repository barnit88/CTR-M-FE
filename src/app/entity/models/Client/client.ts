import { AuditModel } from "../audit-model";

export class Client extends AuditModel {
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
  public ClientType: string;
  public ClientCompanyName: string;
  public ClientCompanyContactNumber: string;
  public ClientCompanyIdentityType: string;
  public ClientCompanyIdentityNumber: string;
  public UDF1: string;
  public UDF2: string;
}
