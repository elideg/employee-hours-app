import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { LoginComponent } from './../../../../libs/ui-lib/src/lib/login/login.component';
import { WildcardComponent } from './../../../../libs/ui-lib/src/lib/wildcard/wildcard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'employees', children: [
    { path: '', component: EmployeesListComponent }
  ]},
  { path: 'wild', component: WildcardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
