import { Employee } from "../Employees/employee";
import { AuditModel } from './../audit-model';

export class User extends AuditModel {
  public LockoutEnd: Date;
  public TwoFactorEnabled: boolean;
  public PhoneNumberConfirmed: boolean;
  public PhoneNumber: string;
  public ConcurrencyStamp: string;
  public SecurityStamp: string;
  public PasswordHash: string;
  public EmailConfirmed: boolean;
  public NormalizedEmail: string;
  public Email: string;
  public NormalizedUserName: string;
  public UserName: string;
  public LockoutEnabled: boolean;
  public AccessFailedCount: number;
  public EmployeeId: number;
  public Employee: Employee;
}
