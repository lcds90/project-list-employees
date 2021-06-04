import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap/all';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/features/service/employee';
import { EmployeeDataService } from '../service/employee-data.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements AfterViewInit {
  columnsToDisplay: Array<string> = ["photo", "name", "active"];
  employees: Observable<any>;


  constructor(
    private employeeService: EmployeeService,
    private employeeDataService: EmployeeDataService,
    private router: Router,
  ) {
    this.employees = this.employeeService.getAll();
  }

  ngAfterViewInit(){
    this.playStartAnimation();
  }

  public dismiss(employee: Employee, key: string) {
    if ((employee.active).toString() === 'true') {
      employee.active = false
    }
    this.employeeService.dismiss(employee, key);
  }

  public edit(employee: Employee, key: string) {
    this.employeeDataService.changeEmployee(employee, key);
    this.router.navigate(['/form']);
  }

  public delete(key: string){
    this.employeeService.delete(key);
  }

  private playStartAnimation(){
    let tl = gsap.timeline({defaults: {duration: 3}});
    tl.set('div', {overflow: 'hidden'})
    .from('#addNewEmployee', {opacity: 0, y: 300, duration: 5})
    .from('#tableEmployees', {opacity: 0, x: 600}, '-=2')
    .from('#tableEmployees__caption', {opacity: 0, x: -600}, '-=2')
    .set('div', {overflow: 'auto'})

  }
}
