import { AuditModel } from "../audit-model";

export class Vendor extends AuditModel {
  public FirstName: string;

  public MiddleName: string;

  public LastName: string;

  public State: string;

  public District: string;

  public Muncipality: string;

  public ContactNumber: string;

  public Email: string;

  public IdentityType: string;

  public IdentityNo: string;

  public VendorType: string;

  public CompanyName: string;

  public CompanyContactNo: string;

  public CompanyIdentityType: string;

  public CompanyIdentityNumber: string;

  public UDF1: string;

  public UDF2: string;
}
