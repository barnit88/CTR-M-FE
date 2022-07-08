import { AuditModel } from "../audit-model";

export class Site extends AuditModel {
  public SiteName: string;

  public State: string;

  public District: string;

  public Muncipality: string;

  public SiteWorkType: string;

  public SiteWorkDetail: string;

  public UDF1: string;

  public UDF2: string;
}
