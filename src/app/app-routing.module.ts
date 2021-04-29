import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NewEmployeeComponent } from './features/new-employee/new-employee.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "new",
    component: NewEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
