import { AuditModel } from "../audit-model";
import { Client } from "../Client/client";
import { PersonalVehicle } from "./personal-vehicle";

export class PVIncome extends AuditModel {
  public PvId: number;
  public PersonalVehicle: PersonalVehicle;
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
