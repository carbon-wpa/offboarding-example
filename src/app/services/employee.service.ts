import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, map, Observable } from 'rxjs';
import { EmployeeModel } from '@models';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public terminatedEmployees: string[] = [];

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<EmployeeModel[]> {
    const mockedApiURL = `assets/employees.json`;
    return this.http.get<EmployeeModel[]>(mockedApiURL);
  }

  // todo: change it ot real API call - now iti s mock
  public getEmployeeById(id: string | null): Observable<EmployeeModel | undefined> {
    if (!id){
      return EMPTY;
    }

    return this.getEmployees()
      .pipe(
        map(employees => employees.find(employee => employee.id === id))
      );
  }
}
