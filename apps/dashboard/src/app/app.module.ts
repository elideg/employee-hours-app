import { EmployeesDetailsComponent } from './employees/employees-details/employees-details.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { MaterialModule } from './../../../../libs/material/src/lib/material.module';
import { UiLibModule } from './../../../../libs/ui-lib/src/lib/ui-lib.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesComponent } from './employees/employees.component';
import { AdminComponent } from './admin/admin.component';
import { RoutingModule } from './routing.module';
import { CoreDataModule } from '@employee-hour-app/core-data';
import { CoreStateModule } from '@employee-hour-app/core-state';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, EmployeesComponent, AdminComponent, EmployeesListComponent, EmployeesDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiLibModule,
    HttpClientModule,
    CoreStateModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
