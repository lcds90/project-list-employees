import { FadeInAnimationDirective } from './shared/directives/gsap/fade-in.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment';


import { MaterialModule } from './shared/modules/material/material.module';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { EmployeesComponent } from './features/employees/employees.component';
import { FormEmployeeComponent } from './features/form-employee/form-employee.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { InfoComponent } from './features/info/info.component';
import { SellsComponent } from './features/sells/sells.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    FormEmployeeComponent,
    ToolbarComponent,
    InfoComponent,
    FadeInAnimationDirective,
    SellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
