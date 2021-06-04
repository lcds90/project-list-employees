import { SellsComponent } from './features/sells/sells.component';
import { InfoComponent } from './features/info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { FormEmployeeComponent } from './features/form-employee/form-employee.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "form",
    component: FormEmployeeComponent
  },
  {
    path: "info",
    component: InfoComponent
  },
  {
    path: "sells",
    component: SellsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
