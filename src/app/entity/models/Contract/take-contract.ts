import { AuditModel } from "../audit-model";
import { Client } from "../Client/client";
import { Site } from "../Site/site";

export class TakeContract extends AuditModel {
  public ClientId: number;
  public Client: Client;
  public SiteId: number;
  public Site: Site;
  public ContractFinishPeriod: number;
  public ContractStartDate: Date;
  public ContractFinishDate: Date;
  public ContractAmount: number;
  public UDF1: string;
  public UDF2: string;
}
