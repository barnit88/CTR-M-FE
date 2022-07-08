import { AuditModel } from "../audit-model";
import { Client } from "../Client/client";
import { RentedEquipment } from "./rented-equipment";

export class REIncome extends AuditModel {
  public RentedEquipmentId: number;
  public RentedEquipment: RentedEquipment;
  public ClientId: number;
  public Client: Client;
  public RateType: string;
  public FromDate: Date;
  public ToDate: Date;
  public Rate: number;
  public Period: number;
  public Income: number;
  public UDF1: number;
  public UDF2: number;
}
