import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {

  @Input() dataSource!: Employee[];
  @Input() columnsToDisplay!: string[];
}