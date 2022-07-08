export interface IEntity {
  Id: number;
  LastModifiedBy: string;

  DateModified: Date;

  CreatedBy: string;

  DateCreated: Date;

  IsDeleted: boolean;

  DeletedBy: string;

  DeletedDate: Date;
}
