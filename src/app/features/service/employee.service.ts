import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Employee } from './employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private db: AngularFireDatabase) { }

  insert(employee: Employee) {
    this.db.list('employee').push(employee)
      .then((result: any) => {
        console.info(result.key);
      })
  }

  update(employee: Employee, key: string) {
    this.db.list('employee').update(key, employee)
      .catch((error: any) => {
        console.error(error);
      })
  }

  getAll() {
    return this.db.list<any[]>('employee')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        })
      )
  }

  dismiss(employee: Employee, key: string) {
    this.db.list('employee').update(key, {
      "active": employee.active
    })
    .catch((error: any) => {
      console.error(error);
    })
  }

  delete(key: string){
    this.db.object(`employee/${key}`).remove();

  }
}
