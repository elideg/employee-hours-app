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

@NgModule({
  declarations: [AppComponent, EmployeesComponent, AdminComponent, EmployeesListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UiLibModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
