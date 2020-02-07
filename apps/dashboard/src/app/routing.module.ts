import { AuthGaurd } from './../../../../libs/core-data/src/lib/auth/auth-gaurd.service';
import { LoginComponent } from './../../../../libs/ui-lib/src/lib/login/login.component';
import { WildcardComponent } from './../../../../libs/ui-lib/src/lib/wildcard/wildcard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: 'employees', canActivate: [AuthGaurd], children: [
    { path: '', component: EmployeesComponent }
  ]},
  { path: 'wild', component: WildcardComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
