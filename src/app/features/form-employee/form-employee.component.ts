import { EmployeeDataService } from '../service/employee-data.service';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../service/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {

  employee!: Employee;
  key: string = '';

  constructor(
    private employeeService: EmployeeService,
    private employeeDataService: EmployeeDataService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.employee = {} as Employee;
    this.employeeDataService.currentEmployee.subscribe(data => {
      if (data.employee && data.key) {
        this.employee = {} as Employee;
        this.key = data.key;
        this.employee.name = data.employee.name;
        this.employee.email = data.employee.email;
        this.employee.supervisor = data.employee.supervisor;
        this.employee.departament = data.employee.departament;
        this.employee.startedAt = data.employee.startedAt;
        this.employee.active = data.employee.active;
        this.employee.photo = data.employee.photo;
      }
    })
  }

  public onSubmit() {
    if(this.employee.photo === '') this.employee.photo = 'assets/img/avatar.png';


    if (this.key) {

      this.employeeService.update(this.employee, this.key);
    } else {
      if ((this.employee.active).toString() === 'true') {
        this.employee.active = true
      } else {
        this.employee.active = false;
      }
      this.employeeService.insert(this.employee);
    }
    this.router.navigate(['/']);
    this.employee = {} as Employee;
  }


}
