import { AuditModel } from '../audit-model';
import { Employee } from './employee';

export class EmployeePayment extends AuditModel {
  EmployeeId: number;

  Employee: Employee;

  FromDate: Date;

  ToDate: Date;

  PaymentRate: number;

  Period: number;

  Payment: number;

  UDF1: string;

  UDF2: string;
}
