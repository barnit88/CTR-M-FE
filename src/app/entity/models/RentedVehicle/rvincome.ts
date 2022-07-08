import { AuditModel } from "../audit-model";
import { Client } from "../Client/client";
import { RentedVehicle } from "./rented-vehicle";

export class RVIncome extends AuditModel {
  public RentedVehicleId: number;
  public RentedVehicle: RentedVehicle;
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
