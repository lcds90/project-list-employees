import { Employee } from 'src/app/features/service/employee';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor() { }

  private employeeSource = new BehaviorSubject({ employee: {} as Employee, key: '' });
  currentEmployee = this.employeeSource.asObservable();

  public changeEmployee(employee: Employee, key: string) {
    this.employeeSource.next({ employee: employee, key: key });
  }
}
