import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REExpenses } from 'src/app/entity/models/RentedEquipment/reexpenses';
import { AppSettings } from 'src/app/app.setting';

@Injectable({
  providedIn: 'root'
})
export class REExpensesService {

  reeExpense : REExpenses[] = [];

  public getREExpenseList(): Observable < REExpenses[] > {
      return this.http.get<REExpenses[]>(AppSettings.API_ROOT+'REExpense')
  }
  public getREExpensesById(id : number): Observable < REExpenses > {
      return this.http.get<REExpenses>(AppSettings.API_ROOT+'REExpense/' + id)
  }
  public deleteREExpensesById(id : number): Observable < REExpenses > {
      return this.http.delete<REExpenses>(AppSettings.API_ROOT+'REExpense/' + id)
  }
  public addREExpenses(entity : REExpenses): Observable < REExpenses > {
      return this.http.post<REExpenses>(AppSettings.API_ROOT+'REExpense', entity);
  }
  public reExpenseUpdate(id: number, entity: REExpenses): any {
    return this.http.post<REExpenses>(AppSettings.API_ROOT+'REExpense/'+id, entity)
  }

  constructor(private http: HttpClient) { }
}
