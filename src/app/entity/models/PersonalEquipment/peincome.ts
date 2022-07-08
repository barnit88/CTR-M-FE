import { AuditModel } from "../audit-model";
import { Client } from "../Client/client";
import { PersonalEquipment } from "./personal-equipment";

export class PEIncome extends AuditModel {
  public PersonalEquipmentId: number;
  public PersonalEquipment: PersonalEquipment;
  public ClientId: number;
  public Client: Client;
  public RateType: string;
  public FromDate: Date;
  public ToDate: Date;
  public Rate: number;
  public Period: number;
  public Income: number;
  public UDF1: string;
  public UDF2: string;
}
