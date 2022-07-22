import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { REExpenses } from 'src/app/entity/models/RentedEquipment/reexpenses';

@Injectable({
  providedIn: 'root'
})
export class REExpensesService {

  reeExpense : REExpenses[] = [];

  public getREExpenseList(): Observable < REExpenses[] > {
      return this.http.get<REExpenses[]>('http://localhost:3000/employee-payment')
  }
  public getREExpensesById(id : number): Observable < REExpenses > {
      return this.http.get<REExpenses>('http://localhost:3000/employee-payment/' + id)
  }
  public deleteREExpensesById(id : number): Observable < REExpenses > {
      return this.http.delete<REExpenses>('http://localhost:3000/employee-payment/' + id)
  }
  public addREExpenses(entity : REExpenses): Observable < REExpenses > {
      return this.http.post<REExpenses>('http://localhost:3000/employee-payment/', entity);
  }

  constructor(private http: HttpClient) { }
}
